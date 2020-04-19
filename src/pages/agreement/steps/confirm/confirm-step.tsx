import React from "react";
import {Button, Typography, Card, Divider} from "antd";
import "./confirm-step.less";
import {usePartners} from "../../../../hooks/usePartner/usePartners";

const {Title, Paragraph, Text} = Typography;

const ConfirmStep = () => {
    const [partners] = usePartners();

    return (
        <div className="ux-confirm-step__container">
            <Typography>
                {/*<Title>Confirmation Data Information</Title>*/}
                <Card className={'signing-document'}>
                    <div className={'signing-document__header'}>
                        <div>
                            <div>SexHack Hackathon 2020</div>
                            <div>Privacy and safety</div>
                        </div>
                        <Divider/>
                        <div>
                            <div>StartBlock</div>
                            <div>Technological solutions for business</div>
                        </div>
                    </div>
                    <Title level={3} className={'signing-document__title'}>Confirmation</Title>
                    <div className={'signing-document__content'}>
                        <p>
                            I, <Text strong>{partners.male.firstName} {partners.male.lastName}</Text>, date of
                            birth <Text
                            strong>{partners.male.dateOfBirth}</Text>, ID <Text strong>{partners.male.id}</Text>,
                            I confirm that I consent to sexual relations with <Text
                            strong>{partners.female.firstName} {partners.female.lastName}</Text>, date of birth <Text
                            strong>{partners.female.dateOfBirth}</Text>,
                            ID <Text strong>{partners.female.id}</Text>.
                        </p>
                        <p>
                            I, <Text strong>{partners.female.firstName} {partners.female.lastName}</Text>, date of
                            birth <Text strong>{partners.female.dateOfBirth}</Text>, ID <Text
                            strong>{partners.female.id}</Text>,
                            I confirm that I consent to sexual relations with <Text
                            strong>{partners.male.firstName} {partners.male.lastName}</Text>, date of birth <Text
                            strong>{partners.male.dateOfBirth}</Text>, ID <Text strong>{partners.male.id}</Text>.
                        </p>
                    </div>
                    <div className={'signing-document__signers'}>
                        <Text>{partners.male.firstName} {partners.male.lastName}</Text>
                        <br/>
                        <Text>{partners.female.firstName} {partners.female.lastName}</Text>
                        <br/>
                        <Text>Date <Text strong>{partners.sign.date}</Text>. Time <Text strong>{partners.sign.time}</Text></Text>
                    </div>
                    <Divider/>
                    <div className={'signing-document__footer'}>
                        <Text strong>
                            By confirming this document, you agree to the terms of use and acknowledge your
                            understanding of the operation of blockchain technology. A document that has entered into
                            force can be used for litigation.
                        </Text>
                    </div>
                </Card>
            </Typography>
            <div className="ux-medical-step__button-wrapper">
            <Button type="primary" block size="large">
                Confirm
            </Button>
            </div>
        </div>
    );
};

export default ConfirmStep;
