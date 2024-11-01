import { ClipboardEventHandler, FC, useCallback, useMemo } from 'react';
import { Editable, RenderElementProps, RenderLeafProps, Slate, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import { createEditor, Range, Transforms } from 'slate';

import { SlideModel } from '@entities/editable-slide/model/slide';
import { BulletElement } from '@app/lib/slate';

import { Leaf } from './Leaf';
import { ElementPresenter } from './ElementPresenter';
import { Toolbar } from './Toolbar';

import { withFormat } from '../lib/with-format';
import { transformChildren } from '../lib/transform';

import styles from './EditableSlide.module.scss';

interface EditableSlideProps extends SlideModel {}

export const EditableSlide: FC<EditableSlideProps> = (props) => {
    const { title, value } = props;

    const editor = useMemo(() => withHistory(withReact(createEditor())), []);

    const renderElement = useCallback(
        (renderProps: RenderElementProps) => <ElementPresenter {...renderProps} />,
        []
    );
    const renderLeaf = useCallback((renderProps: RenderLeafProps) => <Leaf {...renderProps} />, []);

    const handlePaste: ClipboardEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault();

        const text = event.clipboardData.getData('text/plain');
        const processedText = text.split('\n').filter((line) => line.trim() !== '');

        if (processedText.length === 0) return;

        const { selection } = editor;

        const content: BulletElement[] = processedText.map((line) => ({
            type: 'bullet',
            children: [{ text: line }],
        }));

        if (selection) {
            Transforms.insertFragment(editor, content);
        }
    };

    const handleBlur = () => {
        console.log(transformChildren(editor.children));
    };

    return (
        <Slate editor={withFormat(editor)} initialValue={value}>
            <div className={styles.slideRoot}>
                <h4 className={styles.slideTitle}>{title}</h4>

                <Toolbar />

                <Editable
                    className={styles.textBox}
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    onPaste={handlePaste}
                    onBlur={handleBlur}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            const { selection } = editor;

                            if (selection && Range.isCollapsed(selection)) {
                                event.preventDefault();

                                Transforms.insertNodes(editor, {
                                    type: 'bullet',
                                    children: [{ text: '' }],
                                });
                            }
                        }
                    }}
                />
            </div>
        </Slate>
    );
};
