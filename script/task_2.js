function calc_1(){
    let num = [];
    let numbers = [];
    numbers = document.getElementById("numbers").value;
    numbers = numbers.split(" ");
    let k = numbers.length-1;
    for (let i = 0; i <= k; i++){
        if (numbers[i] % 2 != 0){
            num.push(numbers[i]);
        }
    }
    document.getElementById("output").innerHTML = num + " размер массива " + num.length;
    }
