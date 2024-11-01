import { BulletElement, CustomEditor } from '@app/lib/slate';
import { Element, Node, Transforms, Path, Editor } from 'slate';

const EMPTY_BULLET_ELEMENT: BulletElement = {
    type: 'bullet',
    children: [{ text: '' }],
};

export const withSlides = (editor: CustomEditor) => {
    const { normalizeNode } = editor;

    editor.normalizeNode = ([node, path]) => {
        const isTitle = path.length === 1 && path[0] === 0;

        if (isTitle) {
            if (Element.isElement(node) && node.type !== 'title') {
                Transforms.setNodes(editor, { type: 'title' }, { at: path });
            }
        } else {
            if (Element.isElement(node) && node.type === 'heading') {
                // TODO: Add bullet insertion
                // const nextPath = Path.next(path);
                //
                // const nextNodeExists = Editor.hasPath(editor, nextPath);
                //
                // if (nextNodeExists) {
                //     const nextNode = Node.get(editor, nextPath);
                //     const isNextBullet =
                //         nextNodeExists && Element.isElement(nextNode) && nextNode.type === 'bullet';
                //
                //     console.log(path, 'path', nextPath, 'next path');
                //
                //     if (!isNextBullet) {
                //         Transforms.insertNodes(editor, EMPTY_BULLET_ELEMENT, { at: nextPath });
                //     }
                // } else {
                //     Transforms.insertNodes(editor, EMPTY_BULLET_ELEMENT, { at: nextPath });
                // }
            }
        }

        normalizeNode([node, path]);
    };

    return editor;
};
