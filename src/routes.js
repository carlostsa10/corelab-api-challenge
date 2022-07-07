const express = require('express')

const {
  newVehicle,
  updateVehicle,
  deleteVehicle,
  getAllVehicles,
} = require('./controllers/vehicles')

const routes = express()

routes.post('/newvh', newVehicle)
routes.patch('/updateVehicle/:id', updateVehicle)
routes.delete('/deleteVehicle/:id', deleteVehicle)
routes.get('/vhs', getAllVehicles)

module.exports = routes
