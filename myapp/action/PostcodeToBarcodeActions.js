"use strict";

const req = require("superagent");
class PostcodeToBarcodeActions {
    constructor() {
        this.name = 'postcodeToBarcode';
    }

    doAction(cmd, output, currentActionName) {
        output("your barcode is:");
        req
            .get("http://localhost:3000/zipCode")
            .query({code: cmd})
            .end(function (err, res) {
                output(res.text);
                output("please choose what do you want to do next?");
                currentActionName.value = "postcode";
                output("1-input postcode;     2-return to last item;     q -quit");
            });
    }
}

module.exports = PostcodeToBarcodeActions;