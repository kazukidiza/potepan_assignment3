//結果表示のところを取得
let result = document.getElementById("result");
//小数点を入力できる状態
let decimalEntered = false;
//数字がクリックされた時
function numberClick(target){
  if(result.value == "0"){
    if(target.value == "0" || target.value == "00"){
      return;
    }else{
      result.value = target.value;
    }
  }else{
    result.value += target.value;
  }
}
//DE ACがクリックされた時
function deleteClick(target){
  if(target.value == "AC"){
    result.value = "";
    decimalEntered = false;
  }else if(result.value.slice(-1) == "." && target.value == "DE"){
    result.value = result.value.slice(0,-1);
    decimalEntered = false;
  }else{
    result.value = result.value.slice(0,-1);
  }
  if(result.value == ""){
  result.value = "0";
  }
}
//四則演算子がクリックされたとき
function operatorClick(target){
  if(result.value.slice(-1) == "+" || result.value.slice(-1) == "-" || result.value.slice(-1) == "*" || result.value.slice(-1) == "/"){
    result.value = result.value.slice(0,-1) + target.value;
    decimalEntered = false;
  }else{
    result.value += target.value;
    decimalEntered = false;
  }
}
//=がクリックされたとき
function equalClick(target){
  result.value = eval(result.value);
  if(result.value.includes(".")){
    decimalEntered = true;
  }else{
    decimalEntered = false;
  }
}
//.がクリックされた時
function decimalClick(target){
  if(decimalEntered == true){
    return;
  }else{
    result.value += "."; 
    decimalEntered = true
  }
}