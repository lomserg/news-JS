import AppLoader from './appLoader';
import type { NewsResponse, SourcesResponse } from '../../types';
import { ApiEndpoint } from '../../types';
class AppController extends AppLoader {
    public getSources(
        callback: (data: SourcesResponse) => void = () => {
            console.error('No callback for GET response');
        }
    ) {
        super.getResp<SourcesResponse>(
            {
                endpoint: ApiEndpoint.Sources,
            },
            callback
        );
    }

    public getNews(e: MouseEvent, callback: (data: NewsResponse) => void) {
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
                    super.getResp<NewsResponse>(
                        {
                            endpoint: ApiEndpoint.Everything,
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
