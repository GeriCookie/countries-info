import Sequelize from 'sequelize'
import 'dotenv/config'

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres'
  }
)

const models = {
  Continent: sequelize.import('./continent'),
  Country: sequelize.import('./country'),
  Stats: sequelize.import('./stats')
}

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models)
  }
})

export { sequelize }

export default models;