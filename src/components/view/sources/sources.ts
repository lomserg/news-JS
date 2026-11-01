import './sources.css';
import type { Source } from '../../../types';
class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
        if (!sourceItemTemp) {
            return;
        }
        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const sourceElem = sourceClone.querySelector<HTMLElement>('.source__item-name');
            if (sourceElem) {
                sourceElem.textContent = item.name;
            }
            const sourceItemElem = sourceClone.querySelector<HTMLElement>('.source__item');
            if (sourceItemElem && item.id) {
                sourceItemElem.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        const sourcesElem = document.querySelector<HTMLElement>('.sources');
        if (sourcesElem) {
            sourcesElem.append(fragment);
        }
    }
}

export default Sources;
