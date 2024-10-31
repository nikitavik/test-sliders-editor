import { RenderElementProps } from 'slate-react';

const ParagraphElement = (props: RenderElementProps) => {
    return <p {...props.attributes}>{props.children}</p>;
};

export const Element = (props: RenderElementProps) => {
    const { attributes, children, element } = props;

    switch (element.type) {
        case 'paragraph':
            return <ParagraphElement {...props} />;
        default:
            return <ParagraphElement {...props} />;
    }
};
