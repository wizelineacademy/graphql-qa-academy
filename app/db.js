module.exports = {
    DB: `mongodb://${process.env.USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:27017/todos?authSource=admin`
}