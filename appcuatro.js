const toUpperCaseOriginal = String.prototype.toUpperCase;

String.prototype.toUpperCase = function(){
    return "ESTO ESTÁ PROHIBIDO";

};

const palabra ="esto no esta prohibido";
console.log(palabra.toUpperCase());