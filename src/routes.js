const express = require('express')

const {
  newVehicle,
  updateVehicle,
  deleteVehicle,
  getAllVehicles,
  getOneVehicle,
  favoriteVhs,
} = require('./controllers/vehicles')

const routes = express()

routes.post('/newvh', newVehicle)
routes.patch('/updateVehicle/:id', updateVehicle)
routes.delete('/deleteVehicle/:id', deleteVehicle)
routes.get('/vhs', getAllVehicles)
routes.get('/vhs/:id', getOneVehicle)
routes.post('/favorite/:id', favoriteVhs)

module.exports = routes
