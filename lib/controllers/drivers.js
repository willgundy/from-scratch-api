const { Router } = require('express');
const Driver = require('../models/Driver');

module.exports = Router()
  .get('/:id', async (req, res) => {
      const id = req.params.id;
      const driverById = await Driver.getDriverById(id);
      res.json(driverById);
  })

  .get('/', async (req, res) => {
      const allDrivers = await Driver.getAllDrivers();
      res.json(allDrivers);
  })
