class FormInput{
    constructor(input,isValid){
        this.input = input;
        this.isValid = isValid;  
        this.input.onblur = ()=>{
            this.valid();
        }
        this.input.oninput = ()=>{
            this.valid();
        }
    }    
    valid (){
        var data = this.isValid();
        this.input.nextElementSibling.innerText = data;
        
        if(data){
            return false;
        }
        return true;
    }
    static allVlide(...arg){
       return arg.map((r)=>r.valid()).every(r=>r);
    }
}

var count = new FormInput(document.querySelector(".count"),function(){
    if(!count.input.value){
        return "请输入账号";
    }
    return "";
})

var pwd = new FormInput(document.querySelector(".pwd"),function(){
    if(!pwd.input.value){
        return "请输入密码";
    }
    return "";
})

document.querySelector("form").onsubmit = (e)=>{
    e.preventDefault();
}
document.querySelector(".loginUp").onclick =async function(){
    
    if(!FormInput.allVlide(count,pwd)){
        return ; 
    }
    if(count.input.value != "guting" || pwd.input.value != "mm1314520"){
        document.querySelector(".loginUp span").innerText = "账号或密码错误!";
        return ;
    }

    var data = await API.login({
        loginId : count.input.value,
        loginPwd : pwd.input.value
    })  
    if(data.code==0){
        location.href = "./charpage.html";
    }else{
        document.querySelector(".loginUp span").innerText = "账号或密码错误!";
    }
}
count.input.onfocus = pwd.input.onfocus = ()=>{
    document.querySelector(".loginUp span").innerText = "";

}