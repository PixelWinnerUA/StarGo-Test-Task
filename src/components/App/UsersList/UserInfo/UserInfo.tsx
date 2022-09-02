import React from 'react';
import "../../../../styles/UserInfo.scss"
import {UserInfoPropsTypes} from "../../../../types/UserInfoTypes";


const UserInfo = ({setIsVisible, isVisible, userInfo}: UserInfoPropsTypes) => {
    return (
        <div className={isVisible ? "UserInfo active" : "UserInfo"}>

            <div className="UserInfo-Content">
                <h3>User Info</h3>

                <div className="UserInfo-Text">
                    <span>First name: {userInfo.firstName}</span>
                    <span>Last name: {userInfo.lastName}</span>
                    <span>Age: {userInfo.age}</span>
                    <span>Gender: {userInfo.gender}</span>
                    <span>Country: {userInfo.country}</span>
                </div>

                <div className="Exit-Button" onClick={() => setIsVisible(false)}>EXIT</div>
            </div>

        </div>
    );
};

export default UserInfo;
