import axios from "axios";
import CryptoJS from "crypto-js";
import {UsersIdList, UserType} from "../types/ApiTypes";

export const getUsersIdList = async (): Promise<UsersIdList> => {
    return await axios.get("http://opn-interview-service.nn.r.appspot.com/list", {
        headers: {
            Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxMjMiLCJpZGVudGl0eSI6IjEyMzQifQ.yOIx1ZozHSMy_ZndEEMXIH0YeGUkHH3idl_2WTI12gs' //GenerateJwt()
        }
    }).then(response => response.data.data)
}

export const getUserById = async (id: string): Promise<UserType> => {
    return await axios.get(`http://opn-interview-service.nn.r.appspot.com/get/${id}`, {
        headers: {
            Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxMjMiLCJpZGVudGl0eSI6IjEyMzQifQ.yOIx1ZozHSMy_ZndEEMXIH0YeGUkHH3idl_2WTI12gs' //GenerateJwt()
        }
    }).then(response => response.data.data)
}

//-------------------------JWT Algorithm------------------------------//

const GenerateJwt = () => {
    const getBase64Encoded = (rawString: string) => {
        let wordArray = CryptoJS.enc.Utf8.parse(rawString);
        return CryptoJS.enc.Base64.stringify(wordArray)
    }

    const header = {
        "typ": "JWT",
        "alg": "HS256"
    };
    const payload = {
        "uid": "123",
        "identity": "1234"
    };

    const encodedSecretKey = getBase64Encoded("$SECRET$")
    const encodedHeaders = getBase64Encoded(JSON.stringify(header));
    const encodedPayload = getBase64Encoded(JSON.stringify(payload));

    const signature = CryptoJS.HmacSHA256(`${encodedHeaders}.${encodedPayload}`, encodedSecretKey);
    const encodedSignature = getBase64Encoded(signature);
    return `${encodedHeaders}.${encodedPayload}.${encodedSignature}`.replaceAll("=", "");
}