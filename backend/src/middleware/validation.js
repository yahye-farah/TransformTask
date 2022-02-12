const validation = (req, res, next) => {
  try {
    console.log(req.body);
    let { name, items } = req.body;
    if (!name || items.length === 0) {
      return res.status(400).send({ message: 'name and items are required' });
    }
    //check if items are only letters and _
    for (let i = 0; i < items.length; i++) {
      if (!!/[^a-zA-Z_\s]/.test(items[i])) {
        return res.status(400).send({ message: 'Only letters are allowed' });
      }
    }
    //eliminate duplicate items and convert snake case to camel case
    items = [...new Set(items)].map((item) => {
      if (item.indexOf('_') > -1) {
        return item
          .split('_')
          .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
          .join('');
      } else {
        return item;
      }
    });

    req.transform = { name, items };
    next();
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = validation;
