import React from "react";
import {Button, Layout} from "antd";
import {useHistory} from "react-router-dom";

import LogoStartBlock from "../../resources/LogoStartBlock.png";
import "./header.less";
import {useUserStorage} from "../../hooks/useUserStorage/useUserStorage";

const {Header} = Layout;
const size = "large";

const AppHeader = () => {
    const history = useHistory();
    const userStorage = useUserStorage();

    const currentUser = userStorage.getCurrentUser();

    return (
        <Header className="ux-header">
            <div>
                <img className="ux-header__logo"
                     alt=""
                     src={LogoStartBlock}/>
            </div>
            <div className="ux-header__buttons-wrapper">
                {
                    currentUser ? <>
                        {/*<Text strong>{userStorag}</Text>*/}
                        <Button className="ux-header__logout-button"
                                          type="default"
                                          size={size}
                                          onClick={() => {
                                              userStorage.clear();
                                              history.push("/login");
                                          }}>
                        Logout
                    </Button></> : <>
                        <Button className="ux-header__sign-in-button"
                                type="default"
                                size={size}
                                onClick={() => history.push("/login")}>
                            Sign In
                        </Button>
                        <br/>
                        <Button type="default"
                                size={size}
                                onClick={() => history.push("/registration")}>
                            Sign Up
                        </Button>
                    </>
                }
            </div>
        </Header>
    )
};

export default AppHeader;
