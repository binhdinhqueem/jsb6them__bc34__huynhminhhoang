document.getElementById("btnTotal").onclick = function(){
    var result = []
    var number = document.getElementById("number").value * 1;
    for(i = 2; i <= number; i++){
        let flag =true;
        for(let j = 2; j <= i/2; j++){
            if(i % j == 0){
                flag = false
                break;
            }        
        }
        if(flag)
            result.push(i)
    }
    document.getElementById("notifiCation").innerHTML = "Số nguyên tố là: " + result;
}