import React from "react";
import {Button, Layout} from "antd";
import {useHistory} from "react-router-dom";

import LogoStartBlock from "../../resources/LogoStartBlock.png";
import "./header.less";

const {Header} = Layout;
const size = "large";

const AppHeader = () => {
    const history = useHistory();

    return (
        <Header className="gr-ux-header">
            <div>
                <img className="gr-ux-header__logo"
                     alt=""
                     src={LogoStartBlock}/>
            </div>
            <div className="gr-ux-header__buttons-wrapper">
                <Button className="gr-ux-header__sign-in-button"
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
            </div>
        </Header>
    )
};

export default AppHeader;