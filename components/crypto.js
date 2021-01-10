import {clave} from './claveCrypto'

export const resul = () => console.log(clave)

export const prueba = () =>{
    var CryptoJS = require("crypto-js");

    var ciphertext = CryptoJS.AES.encrypt('hola como estas?', clave);
    console.log("encrypted text", ciphertext.toString());
}




/* var CryptoJS = require("crypto-js");

var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');
console.log("encrypted text", ciphertext.toString());

var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
var plaintext = bytes.toString(CryptoJS.enc.Utf8);
console.log("decrypted text", plaintext); */