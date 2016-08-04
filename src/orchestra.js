/**
 * Orchestra
 *      You instanciate an Orchestra, same as you hiring an real orchestra!
 *      Each orchestra has one conductor and a unwriten and clean sheet music 
 *      (where the pulses are)
 *      Registers new pulses and deliver them to the Conductor.
 */
'use strict';

import Conductor    from 'orchestraConductor';
import Sheet        from 'orchestraSheet';

const RITA = (function RitaInitialize() {
    var sheet =     new Sheet(),
        conductor = new Conductor();
    
    function add(cb, ur, ...args) {
        sheet.write(cb, ur, ...args);
    }

    function perform() {
        conductor.start(sheet.read());
    }

    return {
        add,
        perform
    }
})();

module.exports = RITA;