import React from "react";
import {Button, Typography} from "antd";
import "./confirm-step.less";

const {Title, Paragraph, Text} = Typography;

const ConfirmStep = () => {
    return (
        <div className="ux-medical-step__container">
            <Typography>
                <Title>Confirmation Data Information</Title>
                <Paragraph>
                    I Arnold Alois Schwarzenegger 07/30/1947 ID 123456789
                    I confirm that I consent to sexual relations with Monica Anna Maria Bellucci 30/09/1964
                    ID 987654321. Date 06/03/2020. Time 19.30
                </Paragraph>
                <Paragraph>
                    I Monica Anna Maria Bellucci 30/09/1964 ID 987654321
                    I confirm that I consent to sexual relations
                    with Arnold Alois Schwarzenegger 07/30/1947 ID 123456789. Date 06/03/2020. Time 19.30
                </Paragraph>
            </Typography>
            <div className="ux-medical-step__button-wrapper">
                <Button type="primary" block size="large">
                    Confirm
                </Button>
            </div>
        </div>
    );
}

export default ConfirmStep;
