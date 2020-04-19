import React from "react";
import {Form, Row, Input, Col, Checkbox, Button} from "antd";
import "./doctor-page.less";
import {putInformation, verifyHash} from "../../blockchain/medicalRegistry";

const medicalData: string[] = [
    "Syphilis",
    "Gonorrhoea",
    "Chancroid",
    "AIDS",
    "Hepatitis B",
    "Genital herpes",
    "Genital Warts",
    "Chlamydiasis",
    "Trichomoniasis",
    "Candidiasis"
];

const DoctorPage = () => {
    const verifyUserHash = async () => {
        const result = await putInformation(getInformation());
    };

    return <div className="ux-doctor-page__form-wrapper">
        <Form name="basic"
              className="ux-doctor-page__form"
              initialValues={{remember: true}}
        >
            <Input.Group size="small">
                <Row gutter={8}>
                    <Col span={12}>
                        <Form.Item label="Name">
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Surname">
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
            </Input.Group>
            <Checkbox.Group options={medicalData} defaultValue={['Apple']}/>
            <div className="ux-medical-step__button-wrapper">
                <Button type="primary"
                        block size="large"
                        onClick={verifyUserHash}>
                    Put into blockchain
                </Button>
            </div>
        </Form>
    </div>
};

const getInformation = () => {
    // TODO add information about user
    return {someText: "some"};
};

export default DoctorPage;
