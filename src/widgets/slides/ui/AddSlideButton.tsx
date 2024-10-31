import { FC } from 'react';

import { Button } from '@shared/ui/Button';

import PlusIcon from '@app/assets/icons/plus.svg?react';

import styles from './AddSlideButton.module.scss';

interface AddSlideButtonProps {
    onClick: () => void;
}

export const AddSlideButton: FC<AddSlideButtonProps> = (props) => {
    const { onClick } = props;

    return (
        <Button onClick={onClick} className={styles.button}>
            <span className={styles.buttonContent}>
                <PlusIcon className={styles.icon} />
                <span>Add new slide</span>
            </span>
        </Button>
    );
};
