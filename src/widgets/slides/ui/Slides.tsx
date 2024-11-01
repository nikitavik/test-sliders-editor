import { FC, useState } from 'react';

import { EditableSlide } from '@entities/editable-slide/ui/EditableSlide';

import { initialSlides } from '../model/initial-slides';
import { appendNewSlide } from '../lib/slide-creator';

import { AddSlideButton } from './AddSlideButton';

import styles from './Slides.module.scss';

export const Slides: FC = () => {
    const [slides, setSlides] = useState(initialSlides);

    const handleAddSlide = () => {
        setSlides(appendNewSlide);
    };
    return (
        <div className={styles.root}>
            <div className={styles.slides}>
                {slides.map((slide, index) => (
                    <EditableSlide {...slide} key={index} />
                ))}
            </div>

            <AddSlideButton onClick={handleAddSlide} />
        </div>
    );
};
