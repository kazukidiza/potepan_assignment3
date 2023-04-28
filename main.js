/*global $*/
let result = document.getElementById("result");
let mode = 'integer_mode';


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
    mode = 'integer_mode';
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
    result.value += ".";
    mode = "decimal_mode";
  }
//DEで最後に打たれた文字が消える
//=で数式として計算した結果を表示する
//四則演算子は連続で打とうとすると一つ目がスライスされて二つ目が表示される
//0の状態で00や0を打っても表示は０
//小数点は表示が0の状態で打てば0.と表示される。
//小数点は一度打つと次に+,_,*,/,=,AC,を打つまで使えない
//.がDEで消された場合のみ直前条件の例外