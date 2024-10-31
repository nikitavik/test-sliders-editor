import { FC } from 'react';

import { Slides } from '@widgets/slides/ui/Slides';

import styles from './LandingPage.module.scss';

export const LandingPage: FC = () => {
    return (
        <div className={styles.root}>
            <header className={styles.header}>
                <h1 className={styles.title}>Review and refine your slides</h1>
            </header>

            <main className={styles.mainContainer}>
                <Slides />
            </main>
        </div>
    );
};
