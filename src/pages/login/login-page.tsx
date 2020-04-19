import React from "react";
import {Button, Checkbox, Form, Input} from "antd";
import "./login-page.less"
import {useUserStorage} from "../../hooks/useUserStorage/useUserStorage";
import { useHistory } from "react-router-dom";

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16}
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};
const validationRules = {
    username: [{required: true, message: 'Please input your username!'}],
    password: [{required: true, message: 'Please input your username!'}]
};

const LoginPage = () => {
    const userStorage = useUserStorage();
    const history = useHistory();

    return (
        <div className="ux-login-page__form-wrapper">
            <Form
                name="basic"
                className="ux-login-page__form"
                initialValues={{remember: true}}
                {...layout}
                onFinish={result => {
                    switch (userStorage.auth(result.username, result.password)) {
                        case 'doctor': {
                            history.push('/doctor');
                            break;
                        }
                        case 'male':
                        case 'female': {
                            history.push('/user');
                            break;
                        }
                    }


                }}
            >
                <Form.Item label="Username"
                           name="username"
                           rules={validationRules.username}
                >
                    <Input/>
                </Form.Item>

                <Form.Item label="Password"
                           name="password"
                           rules={validationRules.password}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item name="remember"
                           valuePropName="checked"
                           {...tailLayout}
                >
                    <Checkbox>
                        Remember me
                    </Checkbox>
                </Form.Item>
                <Form.Item {...tailLayout}
                >
                    <Button type="primary"
                            htmlType="submit"
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginPage;
