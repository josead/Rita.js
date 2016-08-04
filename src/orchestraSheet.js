/**
 * Orchestra Sheet
 *      it maps beats. 
 */

'use strict';

import IterableBeat from 'orchestraIterableBeat';

module.exports = function Sheet() {
    // Map of generatedName -> iterableBeat 
    var beats = new Map();     

    function write(cb, rUnit, range) {
        if (beats.has(rUnit)) {
            beats.get(rUnit).addAction(cb);
        } else {
            beats.add(rUnit, new IterableBeat());
        }
        return this;
    }
    
    /**
     * read beats sheet
     * @return Iterator of beats in order of insertion.
     */
    function read() {
        return beats.values();
    }


    return {
        write,
        read
    }
}