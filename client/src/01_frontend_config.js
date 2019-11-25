require('dotenv').config()

const REACT_APP_SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:5001/'

module.exports = {
    SOCKET_URL: REACT_APP_SOCKET_URL
}