import React from 'react';
import {Badge} from "antd";

interface ISexBadges {
    medicalDataProvided: boolean;
    medicalDataVerified: boolean;
    consentToSexualRelationships: boolean;
}

export const SexBadges: React.FC<ISexBadges> = ({medicalDataProvided, medicalDataVerified, consentToSexualRelationships}) => {

    return <div>
        <Badge status={medicalDataProvided ? 'success' : 'default'} text={medicalDataProvided ? 'Medical data provided' : 'Medical data is not provided yet'}/>
        <Badge status={medicalDataVerified ? 'success' : 'default'} text={medicalDataVerified ? 'Medical data verified' : 'Medical data is not verified yet'}/>
        <Badge status={consentToSexualRelationships ? 'success' : 'default'} text={consentToSexualRelationships ? 'Consent to sexual relationships' : 'Сonsent not yet confirmed'}/>
    </div>;
};
