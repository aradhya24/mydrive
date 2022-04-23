import cryptoJs from "crypto-js";
import key from "../secret";
import getFile from "../components/Drive";
const Encrypt=getFile=>{
    return cryptoJs.AES.encrypt(getFile,key).toString();
};
const Decrypt=getFile=>{
    return cryptoJs.AES.decrypt(getFile,key).toString(cryptoJs.enc.Utf8);
};
export{Encrypt,Decrypt};
