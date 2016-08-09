'use strict';

const repl = require('repl');
 const help = require("./help");
const InitAction = require('./action/InitActions');
const PostAction = require('./action/PostcodeActions');
const BarcodeAction = require('./action/BarcodeActions');
const PostcodeToBarcodeAction = require('./action/PostcodeToBarcodeActions');
const BarcodeToPostCodeAction = require('./action/BarcodeToPostCodeActions');

const Router = require('./Router');

const actions = [
    new InitAction(),
    new BarcodeAction(),
    new PostAction(),
    new PostcodeToBarcodeAction(),
    new BarcodeToPostCodeAction()
];

let router = new Router(actions);
//router.start();

let replServer = repl.start({prompt: "> ", eval: handleCmd});
help(output=>console.log(output));
function handleCmd(cmd, context, filename, callback) {
    router.handle(cmd.trim(),function (text) {
        callback(null,text);
    });
 //  router.start();
  //  callback();
}