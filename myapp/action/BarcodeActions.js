"use strict";
const help = require("../help");
class BarcodeActions {
    constructor() {
        this.name = 'barcode';
    }

    doAction(cmd, output, currentActionName) {
        switch (cmd) {
            case "1":
                currentActionName.value = 'barcodeToPostCode';
                output("please input your barcode:");
                break;
            case "2":
                currentActionName.value = 'init';
                help(output=>console.log(output));

            case"q":
                process.exit(0);
            default:
                output('Input error\n');
                currentActionName.value = "barcode";
                output("1 -input barcode;     2 -return to last item;     q -quit");
                break;
        }
    }

}
module.exports = BarcodeActions;