import { CustomEditor } from '@app/lib/slate';
import { Element, Node, Transforms, Path } from 'slate';

export const withSlides = (editor: CustomEditor) => {
    const { normalizeNode } = editor;

    editor.normalizeNode = ([node, path]) => {
        const isTitle = path.length === 1 && path[0] === 0;

        if (Element.isElement(node) && node.type === 'heading') {
            const nextPath = Path.next(path);
            const previousPath = Path.previous(path);

            const nextNodeExists = Node.has(editor, nextPath);
            const prevNodeExists = Node.has(editor, previousPath);

            if (!nextNodeExists) {
                Transforms.insertNodes(
                    editor,
                    { type: 'bullet', children: [{ text: '' }] },
                    { at: nextPath }
                );
            } else {
                const nextNode = Node.get(editor, nextPath);
                const isNextBullet =
                    nextNodeExists && Element.isElement(nextNode) && nextNode.type === 'bullet';
                if (!isNextBullet) {
                    Transforms.insertNodes(
                        editor,
                        { type: 'bullet', children: [{ text: '' }] },
                        { at: nextPath }
                    );
                }
            }
            if (prevNodeExists) {
                const prevNode = Node.get(editor, previousPath);
                const isPrevBullet =
                    prevNodeExists && Element.isElement(prevNode) && prevNode.type === 'bullet';
                const isPrevTitle =
                    prevNodeExists && Element.isElement(prevNode) && prevNode.type === 'title';

                if (!isPrevBullet && !isPrevTitle) {
                    Transforms.insertNodes(
                        editor,
                        { type: 'bullet', children: [{ text: '' }] },
                        { at: path }
                    );
                }
            }
        }

        if (isTitle) {
            if (Element.isElement(node) && node.type !== 'title') {
                Transforms.setNodes(
                    editor,
                    { type: 'title', children: node.children },
                    { at: path }
                );
            }
        }

        normalizeNode([node, path]);
    };

    return editor;
};
