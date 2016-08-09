"use strict";

const req = require("superagent");
class BarcodeToPostCodeActions {
    constructor() {
        this.name = 'barcodeToPostCode';
    }

    doAction(cmd, output, currentActionName) {
        output("your post code is:");
        req
            .get('http://localhost:3000/barcode')
            .query({code: cmd})
            .end(function (err, res) {
                output(res.text);
                output("please choose what do you want to do next?");
                currentActionName.value = "barcode";
                output("1 - input barcode;     2 -return to last item;     q -quit");
            });
    }

}

module.exports = BarcodeToPostCodeActions;

