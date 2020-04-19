import React, {useState} from "react";
import {Form, Row, Input, Col, Checkbox, Button, Result} from "antd";
import "./doctor-page.less";
import {putInformation} from "../../blockchain/medicalRegistry";

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
    const [loading, setLoading] = useState(false);
    const [verified, setVerified] = useState(false);

    const verifyUserHash = async () => {
        setLoading(true);
        await putInformation(getInformation());
        setVerified(true);
        setLoading(false);
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
            {verified
                ?
                <Result title="Successfully put into blockchain"/>
                :
                <div className="ux-medical-step__button-wrapper">
                    <Button type="primary"
                            hidden={verified}
                            loading={loading}
                            block size="large"
                            onClick={verifyUserHash}>
                        Put into blockchain
                    </Button>
                </div>
            }
        </Form>
    </div>
};

const getInformation = () => {
    // TODO add information about user
    return {};
};

export default DoctorPage;
