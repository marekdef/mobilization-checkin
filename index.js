// ==================== Load/start dependencies
var deployd_setup = require('dpd-openshift-start-script');
var deployd_instance = deployd_setup(deploydStartedCallback);
var colors = deployd_instance.colors;

function deploydStartedCallback(){
    //some code that requires deployd, maybe some operations on dpd-internalClient?
    console.log('You started deployd server by: ' + colors.magenta('dpd-openshift-start-script'));
    deployd_instance.dpd_ic.logger.post( {time: Date.now(), body: "Deployd server started"}, console.log)
}
