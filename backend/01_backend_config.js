require('dotenv').config()

const YOUR_DATABASE_URL = process.env.DATABASE_URL || 'mongodb+srv://iflukej:Ff0813780670@smartfarm-euxel.gcp.mongodb.net/test?retryWrites=true&w=majority'//'mongodb://localhost:27017/SmartFarm'  // MongoDB Only
const YOUR_NB_PORT = process.env.NB_PORT || 5003 // Insert Here ex. 3003
const YOUR_SOCKET_PORT = process.env.SOCKET_PORT || 5001
const YOUR_LINE_API = 'Bearer {JN5kZ9mYMDGYC1N85tCoR04mz/6JcOoRmWhl0WECIV2la8iPLTZ07j6AE2FPUbF1XnrWwcEKodeiHLYzje2mpUMSISy1f4ocle5xnanGwg2IOUo6zR269B24ZMz3vr/vjgbOj+OhVY/zuye3mQGtZgdB04t89/1O/w1cDnyilFU=}'

module.exports = {
    NB_PORT: YOUR_NB_PORT,
    SOCKET_PORT: YOUR_SOCKET_PORT,
    DATABASE_URL: YOUR_DATABASE_URL,
    LINE_SECRETE_TOKEN: YOUR_LINE_API
}
