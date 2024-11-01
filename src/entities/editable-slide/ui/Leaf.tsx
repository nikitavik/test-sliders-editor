import { RenderLeafProps } from 'slate-react';

export const Leaf = (props: RenderLeafProps) => {
    const { children, attributes } = props;

    return <span {...attributes}>{children}</span>;
};
