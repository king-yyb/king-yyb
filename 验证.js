window.onload = function () {
    var username = document.getElementById('yhm');
    var pwd1 = document.getElementById('mima');
    var pwd2 = document.getElementById('mima2');
    var email = document.getElementById('email');
    username.onblur = function () {
        var value = username.value;
        var yz = /^[a-zA-Z]\w{4,15}$/g.test(value);
        if (value == '' || value == null) {
            document.getElementById('p1').style = 'display: block';
            username.focus();
            return false;
        }
        else if(!yz) {
            document.getElementById('p1').style = 'display: none';
            document.getElementById('p2').style = 'display: block';
            username.focus();
            return false;
        }
        else {
            document.getElementById('p1').style = 'display: none';
            document.getElementById('p2').style = 'display: none';
        }
    }
    pwd1.onblur = function () {
        var value = pwd1.value;
        var yz = /^[a-zA-Z]\w{5,12}$/g.test(value);
        if (value == '' || value == null) {
            document.getElementById('p3').style = 'display: block';
            pwd1.focus();
            return false;
        }
        else if(!yz) {
            document.getElementById('p3').style = 'display: none';
            document.getElementById('p4').style = 'display: block';
            pwd1.focus();
            return false;
        }
        else {
            document.getElementById('p3').style = 'display: none';
            document.getElementById('p4').style = 'display: none';
        }
    }
    pwd2.onblur = function () {
        var pwd1value = pwd1.value;
        var pwd2value = pwd2.value;
        var yz = /^[a-zA-Z]\w{5,12}$/g.test(pwd2value);
        if (pwd2value == '' || pwd2value == null) {
            document.getElementById('p5').style = 'display: block';
            pwd2.focus();
            return false;
        }
        else if(!yz) {
            document.getElementById('p5').style = 'display: none';
            document.getElementById('p6').style = 'display: block';
            pwd2.focus();
            return false;
        }
        else if(pwd1value != pwd2value) {
            document.getElementById('p5').style = 'display: none';
            document.getElementById('p6').style = 'display: none';
            document.getElementById('p7').style = 'display: block';
        }
        else {
            document.getElementById('p5').style = 'display: none';
            document.getElementById('p6').style = 'display: none';
            document.getElementById('p7').style = 'display: none';
        }
    }

}
