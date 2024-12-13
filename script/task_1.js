function calc_1(){
    let num;
    num = parseFloat(document.getElementById("numbers").value);
    if (!isNaN(num)){
        document.getElementById("output").innerHTML = f(num);
    }else{
        document.getElementById("output").innerHTML = "Пожалуйста введите число";
    }

}

function f(x){
    return x ** 3;
}