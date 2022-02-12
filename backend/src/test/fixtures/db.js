const mongoose = require('mongoose');
const Transform = require('../../models/transform');

const validTransformObj = {
  name: 'Hello world',
  items: ['foo', 'bar', 'baz'],
};

const validTransformObjWithDublicate = {
  name: 'Hello world',
  items: ['foo', 'bar', 'baz', 'bar'],
};

const validTransformObjWithSnakeCase = {
  name: 'Hello world',
  items: ['foo_bar', 'bar', 'baz'],
};

const invalidTransformObj = {
  name: 'Hello world',
  items: ['foo', 'bar', 11, '#$$%'],
};

const setupDatabase = async () => {
  await Transform.deleteMany();
};

const addValidTransformObjectToDB = async () => {
  await new Transform(validTransformObj).save();
};

module.exports = {
  setupDatabase,
  addValidTransformObjectToDB,
  validTransformObj,
  invalidTransformObj,
  validTransformObjWithDublicate,
  validTransformObjWithSnakeCase,
};
