var axios = require('axios')

// read from .env
var AUTH_TOKEN = require('dotenv').config().parsed.LIFX_TOKEN
var DEFAULT_LIGHTS = 'all'
var ON = 'on';
var OFF = 'off';

axios.defaults.baseURL = 'https://api.lifx.com/v1/lights/' + DEFAULT_LIGHTS
axios.defaults.headers.common['Authorization'] = 'Bearer ' + AUTH_TOKEN

module.exports = {
	listLights() {
		axios.get('/')
			.then((resp) => console.info(resp.data))
			.catch((e) => console.info('Error:', e))
	},

	lightsOn() {
		axios.put('/state', { power: ON })
			.then((resp) => console.info('Lights on: success', resp.data))
			.catch((e) => console.error('Lights on: error', e))
	},

	lightsOff() {
		axios.put('/state', { power: OFF })
			.then((resp) => console.info('Lights off: success', resp.data))
			.catch((e) => console.error('Lights off: error', e))
	},

	lightsToggle() {
		axios.post('/toggle')
			.then((resp) => console.info('Lights toggle: success', resp.data))
			.catch((e) => console.error('Lights toggle: error', e))
	}
}
