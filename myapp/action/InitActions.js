"use strict";

const help = require("../help");
class InitActions {
    constructor() {
        this.name = 'init';
    }

    doAction(cmd,output,currentActionName ) {
        switch (cmd) {
            case '1':
                currentActionName.value ='postcode';
                output("1-input postcode;     2-return to last item;     q -quit");

                break;
            case '2':
                currentActionName.value ='barcode';
                output("1 - input barcode;     2 -return to last item;     q -quit");
                break;
                
            case'q':
                process.exit(0);
                break;
            default:
                output('Input error');
                currentActionName.value = "init";
                help(output=>console.log(output));
                break;
        }
    }
}

module.exports = InitActions;