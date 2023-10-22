'use client'

import { useContext } from 'react';
import { BiLogInCircle, BiLogOutCircle } from 'react-icons/Bi';

import AppContext from '@/app/Context/AppContext';

import styles from './MainMenu.module.scss'

const MainMenu = () => {

    const { isLogged } = useContext(AppContext)

    const showLogin = () => {
        console.log(`Wyswietalmy login`)
    }

    const showRegister = () => {
        console.log(`Wyświtlany register`)
    }

    const logOut = () => {
        console.log(`Wylogowujemy`)
    }

    return (
        <div className={styles.container}>
            {isLogged ?
                <div className={styles.buttons}>
                    <div onClick={() => logOut()} className={styles.button}>
                        Logout
                        <BiLogOutCircle className={styles.icon} />
                    </div>
                </div> :
                <div className={styles.buttons}>
                    <div onClick={() => showLogin()} className={styles.button}>
                        Login
                        <BiLogInCircle className={styles.icon} />
                    </div>
                    <div onClick={() => showRegister()} className={styles.createAccountButton}>Create Account</div>
                </div>

            }
        </div >
    );
}

export default MainMenu;
