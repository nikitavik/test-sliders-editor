import { MouseEventHandler } from 'react';

export const preventFocusLost: MouseEventHandler<HTMLButtonElement> = (event) =>
    event.preventDefault();
