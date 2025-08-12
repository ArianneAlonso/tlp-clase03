//1. Función constructora: CuentaBancaria Creá una función constructora llamada CuentaBancaria que reciba:
//titular (string)
//saldoInicial (number)
//Agregá al prototype los siguientes métodos:
//depositar(monto) → Suma el monto al saldo.
//extraer(monto) → Resta el monto si hay suficiente saldo. Si no, mostrar "Fondos insuficientes".
//consultarSaldo() → Muestra el saldo actual con un mensaje como "Saldo actual: $1000".

function CuentaBancaria(titular, saldoInicial){
    this.titular = titular;
    this.saldo = saldoInicial
}

CuentaBancaria.prototype.depositar = function(monto){
    this.saldo += monto
    console.log(this.saldo)
}

CuentaBancaria.prototype.extraer = function(monto){
    if (monto > 0) {
        this.saldo -= monto
    console.log(this.extraer)
    } else {
        console.log("fondos insuficientes")
    }
}

CuentaBancaria.prototype.consultarSaldo = function() {
    console.log(`Saldo actual: $${this.saldo}`);
};

const cuenta = new CuentaBancaria("abril", 1000);
cuenta.consultarSaldo();
cuenta.depositar(700);
cuenta.extraer(2000);
cuenta.consultarSaldo();