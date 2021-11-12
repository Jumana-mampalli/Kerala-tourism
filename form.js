let exampleDropdownFormEmail1=document.getElementsByid("exampleDropdownFormEmail1")
let exampleDropdownFormPassword1=document.getElementsByid("exampleDropdownFormPassword1")
function validate(){
   
    let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(exampleDropdownFormEmail1.value)){
        error.innerHTML="valid";
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML="invalid";
        error.style.color="red";
        return false;
    }

    if(exampleDropdownFormEmail1){
        
    }
}