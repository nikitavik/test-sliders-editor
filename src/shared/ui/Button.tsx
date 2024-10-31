import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

interface ButtonProps
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children, className, ...restProps }) => {
    return (
        <button type="button" {...restProps} className={clsx(styles.root, className)}>
            {children}
        </button>
    );
};
