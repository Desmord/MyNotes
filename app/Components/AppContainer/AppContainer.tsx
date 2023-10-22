'use client'

import AppContext from '@/app/Context/AppContext';

import styles from './AppContainer.module.scss';
import { useState } from 'react';

const AppContainer = ({ children, }: { children: React.ReactNode }) => {

    const [isLoginShown, setIsLoginShown] = useState(false);
    const [isRegisterShown, setIsRegisterShown] = useState(false);
    const [userData, setUserDate] = useState({})
    const [isLogged, setIsLogged] = useState(false)

    return (
        <div className={styles.container}>
            <AppContext.Provider value={({
                isLoginShown,
                setIsLoginShown,
                isRegisterShown,
                setIsRegisterShown,
                userData,
                setUserDate,
                isLogged,
                setIsLogged,
            })}>
                {children}
            </AppContext.Provider>
        </div>
    )

}

export default AppContainer