import { RenderLeafProps } from 'slate-react';

export const Leaf = (props: RenderLeafProps) => {
    const { children, attributes, leaf, text } = props;

    return <span {...attributes}>{children}</span>;
};
