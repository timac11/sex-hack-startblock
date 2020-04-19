import React from "react";
import {Button, Layout, Typography} from "antd";
import {useHistory} from "react-router-dom";

import LogoStartBlock from "../../resources/LogoStartBlock.png";
import "./header.less";
import {useUserStorage} from "../../hooks/useUserStorage/useUserStorage";
import {usePartners} from "../../hooks/usePartner/usePartners";

const {Header} = Layout;
const {Title} = Typography;
const size = "large";

const AppHeader = () => {
    const history = useHistory();
    const userStorage = useUserStorage();
    const currentUser = userStorage.getCurrentUser();
    const [partners] = usePartners();
    const user = currentUser === 'male' ? partners.male : partners.female;

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
                        <Title level={4} style={{color: '#ffffff', margin: '0 16px 0 0'}}>{user.firstName} {user.lastName}</Title>
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
