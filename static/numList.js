

function submit(obj) {
    var inputName = document.add_form.name.value;
    var inputTel = document.add_form.tel.value;
    var inputMail = document.add_form.mail.value;
    var inputAddress = document.add_form.address.value;
    var inputQQ = document.add_form.QQ.value;
    var reg = new RegExp("^[0-9]*$");
    let judge = 1;
    if(reg.test(inputTel)){
    }
    else{
        judge = -1;
        alert("电话号码格式错误！！！");
    }

    judge = inputMail.indexOf("@");
    if (judge == -1){
        alert("邮箱格式错误");
    }

    if(reg.test(inputQQ)){
    }
    else{
        judge = -1;
        alert("QQ格式错误！！！");
    }

    alert(judge);
    if (judge == 0) {
        obj.parentNode.add_form.name.val=obj.parentNode.add_form.name.value;
        obj.parentNode.add_form.tel.val=obj.parentNode.add_form.name.value;
        obj.parentNode.add_form.mail.val=obj.parentNode.add_form.mail.value;
        obj.parentNode.add_form.address.val=obj.parentNode.add_form.address.value;
        obj.parentNode.add_form.QQ.val=obj.parentNode.add_form.QQ.value;
    }
    else{
        document.add_form.tel.value = inputTel;
        document.add_form.name.value = inputName;
        document.add_form.mail.value = inputMail;
        document.add_form.address.value = inputAddress;
        document.add_form.QQ.value = inputQQ;
    }
}

function load(code) {
    if (judge) {
        document.body.innerHTML = code;
    }
}
