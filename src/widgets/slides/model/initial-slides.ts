import { SlideModel } from '@entities/editable-slide/model/slide';

export const initialSlides: SlideModel[] = [
    {
        title: 'How to use “from scratch” mode?',
        value: [
            {
                type: 'title',
                children: [{ text: 'How to use “from scratch” mode?' }],
            },
            {
                type: 'bullet',
                children: [
                    {
                        text: 'Elevate your message by attaching up to 3 images, using the paperclip icon in the upper right corner',
                    },
                ],
            },
            {
                type: 'bullet',
                children: [{ text: 'Click "Design this slide" to get your slide designed' }],
            },
        ],
    },
    {
        title: 'Slide 2',
        value: [
            {
                type: 'title',
                children: [{ text: '' }],
            },
        ],
    },
];
