function check() {
    var user_name=log_form.user.value;
    var user_key=log_form.key.value;
    if((user_name=="")||(user_name==null)){
        alert("请输入用户名！");
        log_form.user.focus();//获取焦点
        return;
    }
    else if((user_key=="")||(user_key==null)){
        alert("请输入密码！");
        log_form.key.focus();//获取焦点。
        return;
    }

    else{
        alert("用户名错误或者密码错误，请重新输入！");
        log_form.key.focus();//获取焦点。
        log_form.user.value="";
        log_form.key.value="";
        return;
    }
}