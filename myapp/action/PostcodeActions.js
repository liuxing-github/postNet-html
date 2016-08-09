"use strict";
const help = require("../help");
class PostcodeActions {
    constructor() {
        this.name = "postcode";
    }

    doAction(cmd, output, currentActionName) {
        switch (cmd) {
            case "1":
                currentActionName.value = 'postcodeToBarcode';
                output("please input a postcode with 5, 9, or 10 characters:");
                break;

            case "2":
                currentActionName.value = 'init';
                help(output=>console.log(output));
                break;
            case"q":
                process.exit(0);
                break;
            default:
                output('Input error');
                currentActionName.value = "postcode";
                output("1-input postcode ;     2-return to last item ;     q -quit");
                break;
        }
    }
}

module.exports = PostcodeActions;
