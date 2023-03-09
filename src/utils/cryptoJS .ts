import cryptoJS from "crypto-js";
import crypto from "crypto";

class Crypto {
  key: string = "2752146422";

  // 加密
  encrypt(password: string): string {
    return cryptoJS.AES.encrypt(password, this.key).toString();
  }

  // 解密
  decrypt(ciphertext: string): string {
    const bytes = cryptoJS.AES.decrypt(ciphertext, this.key);
    return bytes.toString(cryptoJS.enc.Utf8);
  }

  // 小程序用户信息解密
  WXDecrypt(session_Key: string, encryptedData: string, iv: string) {
    const sessionKeyBuffer = Buffer.from(session_Key, "base64");
    const encryptedDataBuffer = Buffer.from(encryptedData, "base64");
    const ivBuffer = Buffer.from(iv, "base64");

    try {
      const decipher = crypto.createDecipheriv(
        "aes-128-cbc",
        sessionKeyBuffer,
        ivBuffer
      );
      decipher.setAutoPadding(true);

      let decoded = decipher.update(encryptedDataBuffer, undefined, "utf8");

      decoded += decipher.final("utf-8");

      decoded = JSON.parse(decoded);

      return decoded;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new Crypto();
