import { Descendant, Element } from 'slate';

type ContentBlock = {
    heading: string;
    bullets: string[];
};

type Result = {
    title: string;
    content_blocks: ContentBlock[];
};

export const transformChildren = (data: Descendant[]): Result => {
    const result: Result = { title: '', content_blocks: [] };
    let currentBlock: ContentBlock | null = null;

    data.forEach((item) => {
        if (!Element.isElement(item) || !item.children?.[0]?.text) return;

        const text = item.children[0].text;

        switch (item.type) {
            case 'title':
                result.title = text;
                break;

            case 'heading':
                if (currentBlock && (currentBlock.heading || currentBlock.bullets.length)) {
                    result.content_blocks.push(currentBlock);
                }
                currentBlock = { heading: text, bullets: [] };
                break;

            case 'bullet':
                if (!currentBlock) currentBlock = { heading: '', bullets: [] };
                currentBlock.bullets.push(text);
                break;
        }
    });

    if (currentBlock !== null) {
        result.content_blocks.push(currentBlock);
    }

    return result;
};
