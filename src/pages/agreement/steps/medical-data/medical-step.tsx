import React from "react";
import {Button, Typography} from 'antd';
import "./medical-step.less";

const {Title, Paragraph, Text} = Typography;

const MedicalStep = () => {
    return (
        <div className="ux-medical-step__container">
            <Typography>
                <Title>Medical Data Information</Title>
                <Paragraph>
                    In the process of internal desktop applications development, many different design specs and
                    implementations would be involved, which might cause designers and developers difficulties and
                    duplication and reduce the efficiency of development.
                </Paragraph>
                <Paragraph>
                    After massive project practice and summaries, Ant Design, a design language for background
                    applications, is refined by Ant UED Team, which aims to
                    <Text strong>
                        uniform the user interface specs for internal background projects, lower the unnecessary
                        cost of design differences and implementation and liberate the resources of design and
                        front-end development
                    </Text>.
                </Paragraph>
                <Title level={2}>Guidelines and Resources</Title>
                <Paragraph>
                    We supply a series of design principles, practical patterns and high quality design resources
                    (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product
                    prototypes beautifully and efficiently.
                </Paragraph>
            </Typography>
            <div className="ux-medical-step__button-wrapper">
                <Button type="primary" block size="large">
                    Check in blockchain
                </Button>
            </div>
        </div>
    );
};

export default MedicalStep;
