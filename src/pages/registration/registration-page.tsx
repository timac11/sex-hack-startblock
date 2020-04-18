import React from "react";
import {Button, Form, Input, Select} from "antd";
import "./registration-page.less"

const {Option} = Select;

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16}
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
const roles = [
    {
        value: "user",
        key: "user",
        label: "User"
    },
    {
        value: "admin",
        key: "admin",
        label: "Admin"
    }
];

const RegistrationPage = () => {
    return (
        <div className="ux-registration-page__form-wrapper">
            <Form name="basic"
                  className="ux-registration-page__form"
                  initialValues={{remember: true}}
                  validateMessages={validateMessages}
                  {...layout}
            >
                <Form.Item label="Name"
                           name={['user', 'name']}
                           rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="Surname"
                           name={['user', 'surname']}
                           rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="Nickname"
                           name={['user', 'nickname']}
                           rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="Email"
                           name={['user', 'email']}
                           rules={[{type: 'email', required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="Role"
                           name={['user', 'role']}
                >
                    <Select defaultValue="user">
                        {roles.map((role) => <Option value={role.value} key={role.key}>
                                {role.label}
                            </Option>
                        )}
                    </Select>
                </Form.Item>
                <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                    <Button type="primary"
                            htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default RegistrationPage;
