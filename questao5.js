function inverterString(str){
    var newString = "";

    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    console.log(newString);
}

inverterString("Hello World");