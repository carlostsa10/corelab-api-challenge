const yup = require('./yup')

const VehicleSchema = yup.object().shape({
  name: yup.string().max(40).trim().required(),
  brand: yup.string().max(20).trim().required(),
  color: yup.string().max(10).trim().required(),
  year: yup.number().max(4).required(),
  plate: yup.string().max(7).trim().required(),
  price: yup.number().min(3).required(),
  favorite: yup.boolean(),
  createAt: yup.date().required(),
})

module.exports = {
  VehicleSchema,
}
