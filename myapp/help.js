/**
 * Created by liuxing on 8/4/16.
 */
"use strict";
function help(output) {
    output( `
        ** Welcome **
        1 - postcode
        2 - barcode
        q - quit`.trim())
};
module.exports = help;