/**
 * Created by liuxing on 8/5/16.
 */
"use strict";

const Barcode = require("../../action/BarcodeActions");

describe("barcodeAction",function () {
    let barcode;
    beforeEach(() => {
        barcode= new Barcode();
    });
    it("should return barcodeToPostcode when you input 1",function () {
        let cmd = "1";
        let output = jasmine.createSpy('spy');
        let currentActionName = {value:'barcodeToPostCode'};
        barcode.doAction(cmd,output,currentActionName);
        expect(output).toHaveBeenCalledWith("please input your barcode:");
    });
    it("should return postcodeToBarcode when you input 2",function () {
        let cmd = "2";
        let output = jasmine.createSpy('spy');
        let currentActionName = {value:'barcodeToPostCode'};
        barcode.doAction(cmd,output,currentActionName);
        expect(output).toHaveBeenCalledWith("please input your barcode:");
    });
    
});

