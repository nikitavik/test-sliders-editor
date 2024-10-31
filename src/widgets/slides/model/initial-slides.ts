import { SlideModel } from '@entities/model/slide';

export const initialSlides: SlideModel[] = [
    {
        title: 'Slide 1',
        value: [
            {
                type: 'paragraph',
                children: [{ text: 'How to use “from scratch” mode?' }],
            },
        ],
    },
    {
        title: 'Slide 2',
        value: [
            {
                type: 'paragraph',
                children: [{ text: 'How to use “from scratch” mode?' }],
            },
        ],
    },
    {
        title: 'Slide 3',
        value: [
            {
                type: 'paragraph',
                children: [{ text: 'How to use “from scratch” mode?' }],
            },
        ],
    },
];
