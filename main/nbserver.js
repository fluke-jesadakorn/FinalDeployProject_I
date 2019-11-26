module.exports = { listen, sendSw }
require('dotenv').config()
const config = require('../01_backend_config')
const express = require('express')
const dgram = require("dgram")
const server = dgram.createSocket("udp4")
const socketIO = require('socket.io')
const bodyParser = require('body-parser')
const sc = express()
const port = config.SOCKET_PORT
const axios = require('axios')

sc.use(bodyParser.json())
sc.use(bodyParser.urlencoded({
	extended: true
}))
const app = sc.listen(port, function (err, result) {
	console.log('SocketIO API Start On http://localhost:' + port)
})

const io = socketIO.listen(app);
var store = { 
	moi: [], nbip: [], nbport: [] 
};
function LineSw(data) {
	switch (data.type) {
		case "setMoi": {
			store.moi = data.payload
		}
		case "setNbip": {
			store.nbip = data.payload
		}
		case "setNbPort": {
			store.nbport = data.payload
		}
		case "getMoi": return store.moi
	}
}

function listen() {
	server.on("error", function (err) {
		console.log("server error:\n" + err.stack);
		server.close()
	})

	server.on("message", (msg, rinfo) => {
		console.log("server got: " + msg + " from " + rinfo.address + ":" + rinfo.port);
		LineSw({
			type: "setMoi",
			payload: msg.toString()
		})

		LineSw({
			type: "setNbip",
			payload: rinfo.address
		})
		LineSw({
			type: "setNbPort",
			payload: rinfo.port
		})
		io.sockets.emit('nb', LineSw({ type: "getMoi" }))
		axios.post("/api/addData", { data: LineSw({ type: "getMoi" }) })

		// var ack = new Buffer("1")
		// server.send(ack, 0, ack.length, rinfo.port, rinfo.address, function (err, bytes) {
		// 	console.log("sent ACK. 0 ")
		// })
	})

	server.on("listening", function () {
		var address = server.address()
		console.log("NB Iot API Start On : " + address.address + ":" + address.port)
	})

	server.bind({
		address: '0.0.0.0',
		port: config.NB_PORT,
		exclusive: true
	});
}

function sendSw(sw) {
	let res = sw == true ? sw = "1" : sw = "0";
	server.send(res, 0, res.length, store.nbport, store.nbip, function (err, bytes) {
		console.log("res is : " + res + "to " + store.nbip + ": " + store.nbport)
	})
}
