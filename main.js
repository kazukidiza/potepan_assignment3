/*global $*/
let result = document.getElementById("result");



//数字がクリックされた時
function numberClick(target){
  if(result.value == "0"){
    if(target.value == "0" || target.value == "00"){
      result.value += "";
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
  }else{
    result.value += target.value;
  }
}

//=がクリックされたとき
function equalClick(target){
  result.value = eval(result.value);
}

//.がクリックされた時
  function decimalClick(target){
    if(result.value.includes(".")){
      return;
    }else{
      result.value += "."; 
    }
  }




//わからないこと
//小数点は一回しか打てないようにしてしまったから、小数同士の計算ができない