import React, {useEffect, useState} from "react";
import {Button, Checkbox, Input, Typography} from "antd";
import "./user.page.less"
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Agreement from "../../components/agreement/agreement";
import {IPartner, usePartners} from "../../hooks/usePartner/usePartners";
import {useUserStorage} from "../../hooks/useUserStorage/useUserStorage";
import {Female, Male} from "../../hooks/usePartner/Images";

const { Paragraph } = Typography;

const UserPage = () => {
    const userStorage = useUserStorage();
    const [partners] = usePartners();
    const [link, setLink] = useState("");
    const [user, setUser] = useState<IPartner>();

    useEffect(() => {
        switch (userStorage.getCurrentUser()) {
            case 'male': {
                setUser(partners.male);
                break;
            }
            case 'female': {
                setUser(partners.female);
                break;
            }
        }
        
    }, []);

    const generateLink = () => {
        setLink( "http://" + window.location.host + "/agreement?num=0Xasdasfsdfsdfsdflksnn123sdasd1919053j5nfsfasfsdnfssn");
    };

    return (
        <div className="ux-user-page__container">
            <div className="ux-user-page__title-container">
                <Typography.Title>
                    User Profile
                </Typography.Title>
            </div>
            <div className="ux-user-page__info-container">
                <div className="ux-user-page__info-wrapper">
                    <Paragraph editable={{ onChange: () => {}}}>{user?.firstName}</Paragraph>
                    <Paragraph editable={{ onChange: () => {}}}>{user?.lastName}</Paragraph>
                    <Paragraph copyable>This is a copyable text.</Paragraph>
                    <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
                </div>
                <Avatar size={256} icon={userStorage.getCurrentUser() === 'male' ? <Male /> : (userStorage.getCurrentUser() === 'female' ? <Female/> : <UserOutlined/>)} />
            </div>
            <div className="ux-user-page__button-wrapper">
                <Button type="primary" block size="large">
                    Upload Photo
                </Button>
            </div>
            <div className="ux-user-page__button-wrapper generate-button">
                <Agreement/>
                <Input style={{marginBottom: "16px"}} value={link}></Input>
                <Button type="primary"
                        block size="large"
                        onClick={generateLink}>
                    Generate Link
                </Button>
            </div>
        </div>
    )
};

export default UserPage;
