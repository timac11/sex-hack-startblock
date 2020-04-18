import male from './male.png';
import female from './female.png';

interface IBadgesData {
    medicalDataProvided: boolean;
    medicalDataVerified: boolean;
    consentToSexualRelationships: boolean;
}

interface IPartner {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    id: number;
    portraitSrc: string;
    statuses: IBadgesData
}

interface IPartnersData {
    male: IPartner,
    female: IPartner,
    sign: {
        date: string;
        time: string;
    }
}

const partners: IPartnersData = {
    male: {
        firstName: 'Arnold Alois',
        lastName: 'Schwarzenegger',
        dateOfBirth: '07/30/1947',
        id: 123456789,
        portraitSrc: male,
        statuses: {
            medicalDataProvided: true,
            medicalDataVerified: true,
            consentToSexualRelationships: true
        }
    },
    female: {
        firstName: 'Monica Anna Maria',
        lastName: 'Bellucci',
        dateOfBirth: '30/09/1964',
        id: 987654321,
        portraitSrc: female,
        statuses: {
            medicalDataProvided: true,
            medicalDataVerified: true,
            consentToSexualRelationships: false
        }
    },
    sign: {
        date: '06/03/2020',
        time: '19.30'
    }
};

export const usePartners = (amiMale: boolean): [IPartnersData, IPartner, IPartner] => {


    if (amiMale) {
        return [partners, partners.male, partners.female];
    } else {
        return [partners, partners.female, partners.female];
    }
};
