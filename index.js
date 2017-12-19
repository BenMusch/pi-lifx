#! /usr/bin/node

var lifx = require('./lifx');

switch(process.argv[2]) {
	case 'on':
		lifx.lightsOn()
		break
	case 'off':
		lifx.lightsOff()
		break
	case 'toggle':
		lifx.lightsToggle()
		break
	case 'list':
		lifx.listLights()
		break
	default:
		console.error(process.argv + ' not recognized, commands: on/off/toggle/list')
}
