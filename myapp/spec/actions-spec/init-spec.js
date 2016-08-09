/**
 * Created by liuxing on 8/4/16.
 */
"use strict";

const InitAction = require("../../action/InitActions");
describe("initAction",function () {
    let init;
    beforeEach(() => {
        init = new InitAction();
    });
    it("should return postCode when you input 1",function () {
        let cmd = "1";
        let output = jasmine.createSpy('spy');
        let currentActionName = {value:"postCode"};
        init.doAction(cmd,output,currentActionName);
        expect(output).toHaveBeenCalledWith('1-input postcode;     2-return to last item;     q -quit');
    });
    it("should return barcode when you input 2",function () {
        let cmd = "2";
        let output = jasmine.createSpy('spy');
        let currentActionName = {value:"barcode"};
        init.doAction(cmd,output,currentActionName);
        expect(output).toHaveBeenCalledWith("1 - input barcode;     2 -return to last item;     q -quit");
    });
    it("should return quit when you input q",function () {
        let cmd = "q";
        let output = jasmine.createSpy('spy');
        let currentActionName = {value:"init"};
        spyOn(process,"exit");
        init.doAction(cmd,output,currentActionName);
        expect(process.exit).toHaveBeenCalled();
    });
    
});

