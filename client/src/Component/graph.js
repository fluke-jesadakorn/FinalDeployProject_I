import React, { Component } from "react";
import Chart from "react-apexcharts";
import socketIOClient from "socket.io-client"
import config from "../01_frontend_config"
/*
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
*/
export default class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			endpoint: config.SOCKET_URL,
			options: {
				chart: {
					id: "line",
					animations: {
						enabled: true,
						easing: 'linear',
						speed: 50,
						animateGradually: {
							enabled: true,
							delay: 100
						},
						dynamicAnimation: {
							enabled: false,
							speed: 500
						}
					}
				},
				xaxis: {
					categories: []
				}
			},
			series: [
				{
					name: "temp",
					data: []
				}
			]
		};
	}

	add = (json) => {
		let temp = this.state.series[0].data
		if (temp.length > 9) {
			temp.shift()
		}
		let concat = temp.concat(json)
		this.setState({ series: [{ data: concat }] })
		console.log(json)
	}

	soc = () => {
		const { endpoint } = this.state
		const socket = socketIOClient(endpoint)
		socket.on("nb", (json) => {
			this.add(json)
		})
	}

	componentDidMount = () => {
		//this.interval = setInterval(()=>{this.soc()},1000)
		this.soc()
	}

	render() {
		return (
			<div>
				<Chart
					options={this.state.options}
					series={this.state.series}
					type="line"
					width="500"
				/>
			</div>
		);
	}
}