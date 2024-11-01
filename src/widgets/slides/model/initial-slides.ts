import { SlideModel } from '@entities/model/slide';

export const initialSlides: SlideModel[] = [
    // {
    //     title: 'Slide 1',
    //     value: [
    //         {
    //             type: 'title',
    //             children: [{ text: 'How to use “from scratch” mode?' }],
    //         },
    //         {
    //             type: 'bullet',
    //             children: [{ text: 'Bullet1' }],
    //         },
    //         {
    //             type: 'heading',
    //             children: [{ text: 'Bullet1' }],
    //         },
    //     ],
    // },
    {
        title: 'Slide 2',
        value: [
            {
                type: 'title',
                children: [{ text: '' }],
            },
        ],
    },
    // {
    //     title: 'Slide 3',
    //     value: [
    //         {
    //             type: 'heading',
    //             children: [{ text: '' }],
    //         },
    //     ],
    // },
];
