"use strict";

const express = require('express');
const ZipCode = require("./src/Zipcode");
let app = express();
app.use(express.static("public"));

app.get('/zipCode', function (req, res) {
    res.send({zipcode:new ZipCode().changeToBarcode(req.query.code)});
});

let server = app.listen(2000, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

//  | :::|| ::|:| ::||: :|::| :|:|: :|:|: |  12345
//  | :::|| ::|:| ::||: :|::| :|:|: :||:: |:::| |::|: |:|:: :|:|: | 123456789
//  | :||:: |:::| |::|: |:|:: ||::: ||::: | 67890/
/*
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="./node_modules/jquery/dist/jquery.js"></script>
    <link rel="stylesheet" href="./bootstrap-3.3.5-dist/css/bootstrap.min.css">
    <title>transform</title>
    <style type="text/css">
    body {
    border: 1px solid;
    margin: 100px 300px;
    background-color: #FFE1FF;
    text-align: center;
}

.top, .main, .end {
    margin: 40px;
    padding: 5px;
}

.btn-default {
    padding: 10px;
    margin: 20px;
}
.err{
    color:indianred;
    font-size: 12px;
}
.end{
    height:259px;
    overflow: hidden;
    display: block;
}

</style>
<script>
$(document).ready(function () {
    $("#inputCode").focus(function () {
        $(".form-control-static").text('');
        $(".err").text('');
        $('input:radio:first').attr('checked', 'checked');
    });
    $(".btn-default").click(function () {
        let input = $("#inputCode").val();
        let choice = $("input[type=radio]:checked").val();
        if ($("#inlineRadio2").val() === choice) {
            $.get("/zipCode?code=" + input, function (data, status) {
                if (data === '' || data === undefined) {
                    $(".err").append("Input error,please try again!")
                } else {
                    $('.form-control-static').text(data);
                    history(data);
                }
            });
        }else if ($("#inlineRadio1").val() === choice) {
            $.get("/barcode?code=" + input, function (data, status) {
                if (data === '' || data === undefined) {
                    $(".err").append("<b>Input error,please try again!<b>")
                } else {
                    $('.form-control-static').text(data);
                    history(data);
                }
            });
        }
        function history(data) {
            $('.table tr:first').after('<tr class = text-center><td>'+input+'</td><td>'+data+'</td></tr>');
        }

    });


});
</script>

</head>
<body>
<div class="top ">
    <h1 class="text-center ">POST-NET</h1>
    </div> <!--top结束-->

    <div class="main">
    <form class="form-horizontal">
    <div class="form-group ">
    <label class="col-sm-4 control-label">input code</label>
<div class="col-sm-6">
    <input type="code" class="form-control" id="inputCode" placeholder="please input code here">
    </div>
    </div>
    <div class="form-group">
    <label class="col-sm-4 control-label"></label>
    <div class="col-sm-6">
    <p class="err "></p>
    </div>
    </div>
    <div class="form-group">
    <label class="col-sm-4 control-label">result</label>
    <div class="col-sm-1">
    <p class="form-control-static "></p>
    </div>
    </div>
    <div>
    <label class="radio-inline col-sm-4.5 control-label">
    <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked/> barcode to
zipCode
</label>
<label class="radio-inline ">
    <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> zipCode to
barcode
</label>
</div>
<div>
<button type="button" class="btn btn-default ">
    <span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span> OK
    </button>
    </div>
    </form>
    </div><!--main 结束-->

<div class="end">
    <table class="table table-striped">
    <caption class="text-center"> HISTORY</caption>
    <tr>
    <td>code</td>
    <td>result</td>
    </tr>
    </table>
    </div><!--end 结束-->
</body>
</html>