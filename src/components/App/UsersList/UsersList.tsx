import React, {useLayoutEffect, useState} from 'react';
import "../../../styles/UsersList.scss"
import {useQuery} from "@tanstack/react-query";
import {getUserById, getUsersIdList} from "../../../api/Api";
import {CircularProgress} from "@mui/material";
import UserInfo from "./UserInfo/UserInfo";
import {UserType} from "../../../types/ApiTypes";

const UsersList = () => {
        const {
            data: fetchedUsersIdList,
            isError: fetchedUsersIdListError,
            isSuccess: fetchedUsersIdListIsSuccess,
        } = useQuery(["fetchUsersList"], getUsersIdList, {
            refetchOnWindowFocus: false
        })
        const [content, setContent] = useState<JSX.Element[] | undefined>(undefined);
        const [isVisible, setIsVisible] = useState<boolean>(false)
        const [userInfo, setUserInfo] = useState<UserType>({
            age: 0,
            country: "",
            firstName: "",
            gender: "",
            id: "",
            lastName: ""
        })

        useLayoutEffect(() => {
            if (fetchedUsersIdListIsSuccess && fetchedUsersIdList) {
                let fetchedUsersPromises = fetchedUsersIdList.map(item => getUserById(item))
                Promise.allSettled(fetchedUsersPromises).then(results => {
                    setContent(results.map(item => {
                        if (item.status === "fulfilled") {
                            return <li key={item.value.id} onClick={() => {
                                setIsVisible(true)
                                setUserInfo(item.value)
                            }}>{item.value.firstName}</li>
                        } else return <></>
                    }))
                })
            }
        }, [fetchedUsersIdListIsSuccess, fetchedUsersIdList])

        return (
            <div className="UsersList">
                <h2 className="UsersList-Header">
                    Users
                </h2>
                <div className="UsersList-Content">{
                    fetchedUsersIdListError ?
                        <span>Error, try again later!</span> :
                        content?.length === 0 ?
                            <span>Error, no users found!</span> :
                            content ?
                                <ul>{content}</ul>
                                : <CircularProgress/>}
                </div>
                <UserInfo isVisible={isVisible} setIsVisible={setIsVisible} userInfo={userInfo}/>
            </div>
        );
    }
;

export default UsersList;