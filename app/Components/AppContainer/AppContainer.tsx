'use client'

import styles from './AppContainer.module.scss';

const AppContainer = ({ children, }: { children: React.ReactNode }) => {

    return (
        <div className={styles.container}>
            {children}
        </div>
    )

}

export default AppContainer