// @todo: Pulse Iterator
// Array Iterator
'use strict';
module.exports = function IterableBeat(rUnit = 1, range = 1) {
	return {
		actions: [],
		range,
		addAction(...act) {
			this.actions.push(...act);	
		},
		listen : function *(ritmUnit) {
			while (true) {
				let currBeat = 1;
				while (currBeat == ritmUnit) {
					for (let i = 0; i < this.volume; i++) {
						yield this.actions.pop();
					}
					currBeat = 1;
				} 
				currBeat++;
				yield () => console.log('Beat passed!');	
			}
		}
	}
}