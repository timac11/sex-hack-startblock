import React from "react";
import {Button, Checkbox, Form, Input} from "antd";
import startBlock from "../../resources/startblock.jpg";
import "./login-page.less"

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
    return (
        <div className="ux-login-page__form-wrapper">
            <div className="ux-login-page__logo-wrapper">
                <img className="ux-login-page__logo" src={startBlock} alt=""/>
            </div>
            <Form name="basic"
                  className="ux-login-page__form"
                  initialValues={{remember: true}}
                  {...layout}
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
