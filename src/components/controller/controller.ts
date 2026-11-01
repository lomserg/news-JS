import AppLoader from './appLoader';
import type { NewsResponse, SourcesResponse } from '../../types';

class AppController extends AppLoader {
    getSources(
        callback: (data: SourcesResponse) => void = () => {
            console.error('No callback for GET response');
        }
    ) {
        super.getResp<SourcesResponse>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews<NewsResponse>(e: MouseEvent, callback: (data: NewsResponse) => void) {
        let target = e.target;
        if (!target) {
            return;
        }

        const newsContainer = e.currentTarget;
        if (!(newsContainer instanceof Element)) {
            return;
        }

        while (target !== newsContainer) {
            if (!(target instanceof Element)) {
                return;
            }
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (!sourceId) {
                    return;
                }
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode;
        }
    }
}

export default AppController;
