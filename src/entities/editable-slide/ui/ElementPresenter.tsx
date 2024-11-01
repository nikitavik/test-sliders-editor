import { ReactEditor, RenderElementProps, useFocused, useSlate } from 'slate-react';
import { Editor, Element, Node, Path } from 'slate';
import clsx from 'clsx';

import { BULLET_PLACEHOLDER, HEADING_PLACEHOLDER, TITLE_PLACEHOLDER } from '../lib/constants';

import styles from './Element.module.scss';

const Placeholder = ({ text, isHidden }: { text: string; isHidden: boolean }) => (
    <span contentEditable={false} className={clsx(styles.placeholder, isHidden && styles.isHidden)}>
        {text}
    </span>
);

const TitleElement = (props: RenderElementProps) => {
    const { children, attributes, element } = props;

    const isFocused = useFocused();
    const isEmpty = Node.string(element).length === 0;

    return (
        <h2 {...attributes} className={styles.title}>
            {isEmpty && <Placeholder text={TITLE_PLACEHOLDER} isHidden={!isFocused} />}
            {children}
        </h2>
    );
};

const HeadingElement = (props: RenderElementProps) => {
    const { children, attributes, element } = props;

    const isFocused = useFocused();
    const isEmpty = Node.string(element).length === 0;

    return (
        <h3 {...attributes} className={styles.heading}>
            {isEmpty && <Placeholder text={HEADING_PLACEHOLDER} isHidden={!isFocused} />}
            {children}
        </h3>
    );
};

const BulletElement = (props: RenderElementProps) => {
    const { children, attributes, element } = props;

    const isFocused = useFocused();
    const isEmpty = Node.string(element).length === 0;

    const editor = useSlate();

    const path = ReactEditor.findPath(editor, element);
    const previousPath = Path.previous(path);

    const isPreviousNodeExists = Editor.hasPath(editor, previousPath);

    const previousNode = Node.get(editor, previousPath);

    const isPreviousBullet =
        isPreviousNodeExists && Element.isElement(previousNode) && previousNode.type === 'bullet';

    return (
        <li {...attributes} className={styles.listItem}>
            {isEmpty && !isPreviousBullet && (
                <Placeholder text={BULLET_PLACEHOLDER} isHidden={!isFocused} />
            )}
            {children}
        </li>
    );
};

export const ElementPresenter = (props: RenderElementProps) => {
    const { element } = props;

    switch (element.type) {
        case 'title':
            return <TitleElement {...props} />;
        case 'heading':
            return <HeadingElement {...props} />;
        case 'bullet':
            return <BulletElement {...props} />;
    }
};
