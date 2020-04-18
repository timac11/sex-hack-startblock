import React from "react";
import {Button, Descriptions, Typography} from 'antd';
import "./medical-step.less";
import {verifyHash} from "../../../../blockchain/medicalRegistry";

const {Title} = Typography;

const medicalSteps: string[] = [
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

const MedicalStep = () => {
    return (
        <div className="ux-medical-step__container">
            <Typography>
                <Title>Medical Data Information</Title>
                <Descriptions title="Diseases">
                    {medicalSteps.map((step) => <Descriptions.Item label={step}>none</Descriptions.Item>)}
                </Descriptions>
                <Descriptions className="ux-medical-step__doctor-info" title="Doctor Info">
                    <Descriptions.Item label="Name">Doctor Who</Descriptions.Item>
                    <Descriptions.Item label="Public Key">0x12386asabfqkjwhrqwr78123</Descriptions.Item>
                </Descriptions>
            </Typography>
            <div className="ux-medical-step__button-wrapper">
                <Button type="primary" block size="large" onClick={() => verifyHash(getInformation())}>
                    Check in blockchain
                </Button>
            </div>
        </div>
    );
};

const getInformation = () => {
    // TODO add information about user
    return {};
};

export default MedicalStep;
