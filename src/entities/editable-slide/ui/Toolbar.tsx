import { FC } from 'react';
import { Editor, Element, Transforms } from 'slate';
import { useFocused, useSlate } from 'slate-react';
import clsx from 'clsx';

import { Button } from '@shared/ui/Button';

import { preventFocusLost } from '../lib/helpers';

import ListIcon from '@app/assets/icons/list.svg?react';

import styles from './Toolbar.module.scss';

export const Toolbar: FC = () => {
    const editor = useSlate();
    const isFocused = useFocused();

    const handleBulletFormat = () => {
        if (!editor.selection) return;

        Transforms.setNodes(
            editor,
            { type: 'bullet' },
            {
                at: editor.selection,
                match: (n) =>
                    Element.isElement(n) && Editor.isBlock(editor, n) && n.type !== 'title',
            }
        );
    };

    const handleHeadingFormat = () => {
        if (!editor.selection) return;

        Transforms.setNodes(
            editor,
            { type: 'heading' },
            {
                at: editor.selection,
                match: (n) =>
                    Element.isElement(n) && Editor.isBlock(editor, n) && n.type !== 'title',
            }
        );
    };

    return (
        <div className={clsx(styles.root, isFocused && styles.isFocused)}>
            <div className={styles.content}>
                <Button
                    onMouseDown={preventFocusLost}
                    onClick={handleHeadingFormat}
                    className={styles.button}
                >
                    Heading
                </Button>

                <span className={styles.separator}>|</span>

                <Button
                    onMouseDown={preventFocusLost}
                    onClick={handleBulletFormat}
                    className={styles.button}
                >
                    <span className={styles.buttonContent}>
                        <ListIcon className={styles.icon} />
                        <span>Bullet</span>
                    </span>
                </Button>
            </div>
        </div>
    );
};
