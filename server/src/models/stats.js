const stats = (sequelize, DataTypes) => {
  const Stats = sequelize.define('stats', {
    query: {
      type: DataTypes.STRING
    },
    arguments: {
      type: DataTypes.STRING
    },
    resultsCount: {
      type: DataTypes.INTEGER
    }
  })
  
  return Stats
}

export default stats