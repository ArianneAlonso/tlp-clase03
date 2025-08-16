//2. Clase: CuentaBancaria con get y set
//Reimplementá la clase CuentaBancaria anterior, pero usando la sintaxis class.
//Requisitos:
//El saldo debe ser una propiedad privada simulada.
//Usá un getter y setter para acceder y modificar el saldo.
//No se permite acceder directamente a saldo desde afuera
//Aplicar validaciones que el saldo no pueda ser negativo.

class CuentaBancaria {
    titular; 
    #saldo;

    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial >= 0 ? saldoInicial : 0;
    }

    get saldo() {
        return this.#saldo;
    }

    set saldo(nuevoSaldo) {
        if (nuevoSaldo < 0) {
            console.log("el saldo no puede ser negativo");
        } else {
            this.#saldo = nuevoSaldo;
        }
    }

    depositar(monto) {
        if (monto > 0) {
            this.#saldo += monto;
            console.log(`se deposito: $${monto}. saldo actual: $${this.#saldo}`);
        } else {
            console.log("el saldo no puede ser negativo");
        }
    }

    extraer(monto) {
        if (monto > 0) {
            if (this.#saldo - monto >= 0) {
                this.#saldo -= monto;
                console.log(`se extrajo: $${monto}. Saldo actual: $${this.#saldo}`);
            } else {
                console.log("fondos insuficientes");
            }
        } else {
            console.log("el monto debe ser positivo");
        }
    }

    consultarSaldo() {
        console.log(`saldo actual: $${this.#saldo}`);
    }
}

const cuenta = new CuentaBancaria("Abril", 1000);
cuenta.consultarSaldo();
cuenta.depositar(500);
cuenta.extraer(2000);
console.log(cuenta.saldo);
cuenta.saldo = -100;
cuenta.saldo = 2000;
console.log(cuenta.saldo);