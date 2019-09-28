const express = require('express');
const routes = express.Router();


const PlaceController = require('./controllers/PlaceController');

routes.get('/places', PlaceController.index);
routes.get('/places/:id', PlaceController.show);
routes.post('/places', PlaceController.store);
routes.put('/places/:id', PlaceController.update);
routes.delete('/places/:id', PlaceController.destroy);


const ReserveController = require('./controllers/ReserveController');

routes.get('/reserves', ReserveController.index);
routes.get('/reserves/:id', ReserveController.show);
routes.post('/reserves', ReserveController.store);
routes.put('/reserves/:id', ReserveController.update);
routes.delete('/reserves/:id', ReserveController.destroy);





module.exports = routes;