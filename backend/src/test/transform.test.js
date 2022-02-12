const request = require('supertest');
const app = require('../app');
const {
  validTransformObj,
  invalidTransformObj,
  setupDatabase,
  addValidTransformObjectToDB,
  validTransformObjWithDublicate,
  validTransformObjWithSnakeCase,
} = require('./fixtures/db');
const Transform = require('../models/transform');
const res = require('express/lib/response');
beforeEach(setupDatabase);

test('Should create transform successfuly', async () => {
  const resp = await request(app)
    .post('/transformation')
    .send(validTransformObj)
    .expect(201);
  const transform = await Transform.findById(resp.body._id);
  expect(transform).not.toBeNull();
});

test('Should not create transform other than letters', async () => {
  await request(app)
    .post('/transformation')
    .send(invalidTransformObj)
    .expect(400);
});

test('Should fetch transformations correctly', async () => {
  await addValidTransformObjectToDB();
  const transform = await request(app)
    .get('/transformation')
    .send()
    .expect(200);
  expect(transform.body.length).toEqual(1);
});

test('Should delete doublicates from the items entry', async () => {
  const resp = await request(app)
    .post('/transformation')
    .send(validTransformObjWithDublicate)
    .expect(201);

  expect(
    new Set(validTransformObjWithDublicate.items).size !== resp.body.items
  ).toEqual(true);
});

test('Should change convert all snake to camel case', async () => {
  const resp = await request(app)
    .post('/transformation')
    .send(validTransformObjWithSnakeCase)
    .expect(201);

  expect(resp.body.items.indexOf('foo_bar') === -1).toEqual(true);
  expect(resp.body.items.indexOf('FooBar') > -1).toEqual(true);
});
