import {useState, useCallback} from 'react'
import {UserType} from "../../types/ApiTypes";

const ImitateSetUserInfo = () => {
    const [userInfo, setUserInfo] = useState<UserType>({
        age: 0,
        country: "",
        firstName: "",
        gender: "",
        id: "",
        lastName: ""
    })

    const setFakeUserInfo = useCallback(() => setUserInfo({
        age: 64,
        country: "UnitedStates",
        firstName: "Rick",
        gender: "Male",
        id: "fghdg-dfgdfg-dfgdfg-dfgqwe",
        lastName: "Smith"
    }), [])
    return {userInfo, setFakeUserInfo}
}

export default ImitateSetUserInfo;