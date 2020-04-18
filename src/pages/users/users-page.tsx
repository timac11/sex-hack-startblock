import React from "react";
import {Table, Layout} from 'antd';

import "./users-page.less";

const { Content } = Layout;

const UsersPage = () => {
    return (
        <Content className="ux-users-page__content-container">
            <div className="ux-users-page__content">
                <Table columns={columns} dataSource={data}/>
            </div>
        </Content>
    )
};

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Nickname',
        dataIndex: 'nickname',
        key: 'nickname',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text: string, record: any) => (
            <span>
                <a>Delete</a>
            </span>
        )
    }
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        nickname: "John Brown",
        email: "123@mail.com"
    },
    {
        key: '2',
        name: 'Jim Green',
        nickname: "Jim Green",
        email: "123@mail.com"
    },
    {
        key: '3',
        name: 'Joe Black',
        nickname: "Joe Black",
        email: "123@mail.com"
    },
];

export default UsersPage;
