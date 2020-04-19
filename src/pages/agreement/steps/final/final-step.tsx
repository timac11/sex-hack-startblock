import React from "react";
import "./final-step.less";
import {Badge, Card, Col, Divider, Row, Typography} from "antd";
import {usePartners} from "../../../../hooks/usePartner/usePartners";
import {Portrait} from "../../../../components/Portrait/portrait";
import {SexBadges} from "../../../../components/SexBadges/SexBadges";
import _ from 'lodash';

const {Text, Title} = Typography;

const FinalStep = () => {
    const amiMale = true;//@todo remove hardcode
    const [partners] = usePartners();
    const you = amiMale ? partners.male : partners.female;
    const partner = amiMale ? partners.female : partners.male;

    return <Row className={'ux-final-step'}>
        <Col span={8}>
            <Title level={3}>{amiMale ? 'You' : 'Your partner'}</Title>
            <Card className={'ux-final-step__male'}>
                <Typography>
                    <Row>
                        <Col span={14}>
                            <Text><Text strong>Full name:</Text> <br/> {you.firstName}<br/> {you.lastName}</Text>
                            <br/>
                            <Text><Text strong>Date of birth:</Text><br/>{you.dateOfBirth}</Text>
                            <br/>
                            <Text><Text strong>ID:</Text> <br/> {you.id}</Text>
                        </Col>
                        <Col span={10}>
                            <Portrait src={you.portraitSrc}/>
                        </Col>
                    </Row>
                    <Divider/>
                    <SexBadges {...you.statuses} />
                </Typography>
            </Card>
        </Col>
        <Col span={1} className={'ux-final-step__divider'}>
            <Title level={4}>{_.isEqual(you.statuses, partner.statuses) ? 'Mutually' : 'Not mutually'}</Title>
        </Col>
        <Col span={8}>
            <Title level={3}>{amiMale ? 'Your partner' : 'You'}</Title>
            <Card className={'ux-final-step__female'}>
                <Typography>
                    <Row>
                        <Col span={14}>
                            <Text><Text strong>Full name:</Text> <br/> {partner.firstName}<br/> {partner.lastName}</Text>
                            <br/>
                            <Text><Text strong>Date of birth:</Text><br/>{partner.dateOfBirth}</Text>
                            <br/>
                            <Text><Text strong>ID:</Text> <br/> {partner.id}</Text>
                        </Col>
                        <Col span={10}>
                            <Portrait src={partner.portraitSrc}/>
                        </Col>
                    </Row>
                    <Divider/>
                    <SexBadges {...partner.statuses} />
                </Typography>
            </Card>
        </Col>
    </Row>
};

export default FinalStep;
