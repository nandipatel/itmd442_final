// adding page router
const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

// index page
route.get('/', services.homeRoutes);

// add page
route.get('/add_user', services.add_user)

// update page
route.get('/update_user', services.update_user)

//API Commands
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route