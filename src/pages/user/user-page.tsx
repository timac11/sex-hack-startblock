import React from "react";
import {Button, Checkbox, Typography} from "antd";
import "./user.page.less"
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Agreement from "../../components/agreement/agreement";

const { Paragraph } = Typography;

const UserPage = () => {
    return (
        <div className="ux-user-page__container">
            <div className="ux-user-page__title-container">
                <Typography.Title>
                    User Profile
                </Typography.Title>
            </div>
            <div className="ux-user-page__info-container">
                <div className="ux-user-page__info-wrapper">
                    <Paragraph editable={{ onChange: () => {}}}>Name</Paragraph>
                    <Paragraph editable={{ onChange: () => {}}}>Surname</Paragraph>
                    <Paragraph copyable>This is a copyable text.</Paragraph>
                    <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
                </div>
                <Avatar size={256} icon={<UserOutlined/>} />
            </div>
            <div className="ux-user-page__button-wrapper">
                <Button type="primary" block size="large">
                    Upload Photo
                </Button>
            </div>
            <div className="ux-user-page__button-wrapper generate-button">
                <Agreement/>
                <Button type="primary" block size="large">
                    Generate Link
                </Button>
            </div>
        </div>
    )
};

export default UserPage;
