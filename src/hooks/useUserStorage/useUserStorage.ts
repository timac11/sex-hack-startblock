import {useState} from "react";

export const useUserStorage = () => {
    const [confirmed, setConfirmed] = useState<boolean>(localStorage.getItem(`${localStorage.getItem('currentUser')}_consent`) === 'consent');

    const getCurrentUser = () => {
        return localStorage.getItem('currentUser');
    };

    const auth = (login: string, password: string) => {
        switch (login) {
            case 'doctor': {
                if (password === '1234') {
                    localStorage.setItem('currentUser', 'doctor');
                    // history.push('/doctor');
                }
                break;
            }
            case 'male': {
                if (password === '1234') {
                    localStorage.setItem('currentUser', 'male');
                    // history.push('/user');
                }
                break;
            }
            case 'female': {
                if (password === '1234') {
                    localStorage.setItem('currentUser', 'female');
                    // history.push('/user');
                }
            }
        }

        return getCurrentUser();
    };

    const clear = () => {
        localStorage.removeItem('currentUser');
    };

    const confirm = () => {
        switch (getCurrentUser()) {
            case 'male': {
                localStorage.setItem('male_consent', 'consent');
                break;
            }
            case 'female': {
                localStorage.setItem('female_consent', 'consent');
                break;
            }
        }
        setConfirmed(true);
    };

    return {
        auth,
        getCurrentUser,
        clear,
        confirm,
        confirmed
    }
};
