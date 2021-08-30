var inputValue = document.getElementById("result");

btnInput = (val) => { inputValue.value += val; };

clean = () => { inputValue.value = ""; };

backspace = () => {
    var val = inputValue.value;
    inputValue.value = val.substring(
      0,
      val.length - 1
    );
};
equal = () => {
    var val = inputValue.value;
    if (val) {
     inputValue.value = eval(val);
    }
};
