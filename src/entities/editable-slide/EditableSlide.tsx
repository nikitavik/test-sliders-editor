import { FC, useCallback, useMemo } from 'react';
import { Editable, RenderElementProps, RenderLeafProps, Slate, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import { createEditor } from 'slate';

import { Leaf } from './Leaf';
import { Element } from './Element';

import { SlideModel } from '../model/slide';

import styles from './EditableSlide.module.scss';

interface EditableSlideProps extends SlideModel {}

export const EditableSlide: FC<EditableSlideProps> = (props) => {
    const { title, value } = props;

    const editor = useMemo(() => withHistory(withReact(createEditor())), []);

    const renderElement = useCallback(
        (renderProps: RenderElementProps) => <Element {...renderProps} />,
        []
    );
    const renderLeaf = useCallback((renderProps: RenderLeafProps) => <Leaf {...renderProps} />, []);

    return (
        <Slate editor={editor} initialValue={value}>
            <div className={styles.slideRoot}>
                <h3 className={styles.slideTitle}>{title}</h3>

                {/* TODO: Implement Toolbar */}
                {/*<Toolbar />*/}

                <Editable
                    className={styles.textBox}
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    placeholder="Add a title for your slide..."
                    // onKeyDown={(event) => {
                    //     if (event.key === '&') {
                    //         event.preventDefault();
                    //         editor.insertText('and');
                    //     }
                    // }}
                />
            </div>
        </Slate>
    );
};
