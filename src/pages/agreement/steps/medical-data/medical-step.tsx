import React, {useState} from "react";
import {Button, Descriptions, Result, Typography} from 'antd';
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
    const [loading, setLoading] = useState(false);
    const [verified, setVerified] = useState(false);

    const verifyUserHash = async () => {
        setLoading(true);
        const result = await verifyHash(getInformation());
        setLoading(false);
        setVerified(true);
    };

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
            {verified
                ?
                <Result title="Successfully verified"/>
                :
                <div className="ux-medical-step__button-wrapper">
                    <Button type="primary"
                            hidden={verified}
                            loading={loading}
                            block size="large"
                            onClick={verifyUserHash}>
                        Check in blockchain
                    </Button>
                </div>
            }
        </div>
    );
};

const getInformation = () => {
    // TODO add information about user
    return {};
};

export default MedicalStep;
