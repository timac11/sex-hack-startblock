interface IPartner {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    id: number;
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
        id: 123456789
    },
    female: {
        firstName: 'Monica Anna Maria',
        lastName: 'Bellucci',
        dateOfBirth: '30/09/1964',
        id: 987654321
    },
    sign: {
        date: '06/03/2020',
        time: '19.30'
    }
};

export const usePartners = (): IPartnersData => {
  return partners;
};
