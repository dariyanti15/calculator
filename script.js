function insert(num) {
  document.form.textview.value = document.form.textview.value+num;
}

function equal() {
  var exp = document.form.textview.value;
  if(exp){
        document.form.textview.value = eval(exp)
  } 
}

function percentage() {
  if (document.form.textview.value === '0') {
      return;
    }
      document.form.textview.value = document.form.textview.value / 100;
}

function clean() {
  document.form.textview.value ="";
}

function back() {
  var exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0,exp.length-1);
} 

function insert(num){
  if (document.form.textview.value === '0') { 
       document.form.textview.value = num
  } else {
    document.form.textview.value += num
  }
}
