const vehicleSchema = require('../validations/vehicleModel')
const { messages, errors } = require('../validations/messages')

const newVehicle = async (req, res) => {
  const { name, brand, color, year, plate, price, favorite, createdAt } = req.body

  try {
    await vehicleSchema.validate(req.body)

    const newVehicle = await knex('vehicle').insert({
      name,
      brand,
      color,
      year,
      plate,
      price,
      favorite,
      createdAt,
    })

    if (!newVehicle) {
      return res.status(400).json(errors.unregisteredVehicle)
    }

    return res.status(200).json(messages.vehicleSuccess)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const updateVehicle = async (req, res) => {
  const { id } = req.params
  const { name, brand, color, year, plate, price, favorite, createdAt } = req.body

  try {
    await vehicleSchema.validate(req.body)

    const updateVehicle = await knex('vehicle').where('id', id).update({
      name,
      brand,
      color,
      year,
      plate,
      price,
      favorite,
      createdAt,
    })

    if (!updateVehicle) {
      return res.status(400).json(errors.unUpdateVehicle)
    }

    return res.status(200).json(messages.updatedVehicleSuccess)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const deleteVehicle = async (req, res) => {
  const { id } = req.params
  try {
    await vehicleSchema.validate(req.body)

    const deleteVehicle = await knex('vehicle').where('id', id).del()

    if (!deleteVehicle) {
      return res.status(400).json(errors.unDeleteVehicle)
    }

    return res.status(200).json(messages.deletedVehicleSuccess)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await knex('vehicle').select('*')

    if (!vehicles) {
      return res.status(400).json(errors.anyVehicle)
    }

    return res.status(200).json(vehicles)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  newVehicle,
  updateVehicle,
  deleteVehicle,
  getAllVehicles,
}
