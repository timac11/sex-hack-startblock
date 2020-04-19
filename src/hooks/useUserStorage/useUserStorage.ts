export const useUserStorage = () => {
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

    return {
        auth,
        getCurrentUser,
        clear
    }
};
