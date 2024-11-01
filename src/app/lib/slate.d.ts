import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';
import { HistoryEditor } from 'slate-history';

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;

export type FormattedText = { text: string };

export type CustomText = FormattedText;

export type TitleElement = {
    type: 'title';
    children: CustomText[];
};

export type HeadingElement = {
    type: 'heading';
    children: CustomText[];
};

export type BulletElement = {
    type: 'bullet';
    children: CustomText[];
};

export type CustomElement = TitleElement | HeadingElement | BulletElement;

declare module 'slate' {
    interface CustomTypes {
        Editor: CustomEditor;
        Element: CustomElement;
        Text: CustomText;
    }
}
