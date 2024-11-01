import { FC, useCallback, useMemo } from 'react';
import { Editable, RenderElementProps, RenderLeafProps, Slate, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import { createEditor, Range, Transforms } from 'slate';

import { Leaf } from './Leaf';
import { ElementPresenter } from './ElementPresenter';
import { Toolbar } from './Toolbar';

import { SlideModel } from '../../model/slide';
import { withSlides } from '../lib/withFormattedMarkup';

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

    return (
        <Slate editor={withSlides(editor)} initialValue={value}>
            <div className={styles.slideRoot}>
                <h4 className={styles.slideTitle}>{title}</h4>

                <Toolbar />

                <Editable
                    className={styles.textBox}
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
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
