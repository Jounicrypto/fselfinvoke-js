function convertUsdToEuro(){

    var amount = document.getElementById("dollar").value,

    result = amount * 1.01;

    message = document.getElementById("message");

    if (amount === ""){

        message.innerHTML = "This Field Can't be Empty!";

    }else if (isNaN(amount)){ 
        
        message.innerHTML = "This Field Accept Number Only!";

    }else if (amount === "0"){

        message.innerHTML = "The Value Can't Be 0 !";

    }else if (amount < 0 ){

        message.innerHTML = "The Value Can't be Negative Number!"

    }else{
        message.innerHTML = amount + " Dollar Worth " + result + " Euro";
    }
}