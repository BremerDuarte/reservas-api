const express = require('express');
const routes = express.Router();

const PlaceController = require('./controllers/PlaceController');


routes.get('/places', PlaceController.index);
routes.get('/places/:id', PlaceController.show);
routes.post('/places', PlaceController.store);
routes.put('/places/:id', PlaceController.update);
routes.delete('/places/:id', PlaceController.destroy);



module.exports = routes;