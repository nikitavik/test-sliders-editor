import { SlideModel } from '@entities/model/slide';
import { Descendant } from 'slate';

const EMPTY_SLIDE_VALUE: Descendant[] = [
    {
        type: 'paragraph',
        children: [{ text: '' }],
    },
];

export const appendNewSlide = (state: SlideModel[]): SlideModel[] => [
    ...state,
    {
        title: 'Slide 1',
        value: EMPTY_SLIDE_VALUE,
    },
];
