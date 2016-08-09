"use strict";

class Router {
    constructor(actions) {
        this.actions = actions;
        this.currentActionName = {value:"init"};
    }

    handle(cmd,output) {
         this.actions.find(v => v.name === this.currentActionName.value).doAction(cmd,output,this.currentActionName);
       
    }

  /*  start() {
        console.log(this.actions.find(v => v.name === this.currentActionName).help);
    }
*/
}

module.exports = Router;