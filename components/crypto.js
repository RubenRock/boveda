import {clave} from './claveCrypto'

//const CryptoJS = require("crypto-js")
import CryptoJS from 'react-native-crypto-js'

export const encriptar = (texto) =>{
    var ciphertext = CryptoJS.AES.encrypt(texto, clave)
    return("encrypted text", ciphertext.toString())
}

export const desencriptar = (texto) =>{
    var bytes  = CryptoJS.AES.decrypt(texto, clave);
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return("decrypted text", plaintext)
}




/* var CryptoJS = require("crypto-js");

var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');
console.log("encrypted text", ciphertext.toString());

var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
var plaintext = bytes.toString(CryptoJS.enc.Utf8);
console.log("decrypted text", plaintext); */