/** Coductor
 * 		The conductor directs the existing iterableBeats, 
 * 		creating a buffer where all beats are performed*,
 * 		and looped to get the next's (suspend will do it)
 * 		
 * */  
	 			
'use strict';
var Suspend 		= require('../lib/suspend');

var PulseIterator 	= require('pulseIterator');
var Sheet 			= require('orchestraSheet');
var Config 			= require('orchestraConfig');

module.exports = function Conductor(sheet) {
	var currSheet = sheet, 
		halted = false;
		
	function _getMinRUnit() {
		
	}

	function halt() {
		halted = true;
	}

	function perform() {
		// starts performance of the orchestra.
		// the good news! New beats can join the Sheet.
	}

	return {
		perform
	}
}




// let buffer = Pulse1.perform();
// on Adding new action and is paused, timeout is created with
// the smaller RitmUnit pulse available
// (function bufferTimer() {
// 	setTimeout(() => {
// 		let actionBuffered = buffer.next().value;
// 		if (typeof actionBuffered == 'function') 
// 			actionBuffered();
// 		else
// 			console.log(actionBuffered); 
// 		if (Pulse1.actions.length) {
// 			bufferTimer();
// 		} else {
// 			Pulse1.addAction('Infinito!');
// 		}
// 	}, Pulse1.ritmUnit*1000);
// })();
// setTimeout(() => Pulse1.addAction('Mijo'), 1500);
