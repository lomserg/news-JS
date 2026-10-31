import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(
        callback: (data: unknown) => void = () => {
            console.error('No callback for GET response');
        }
    ) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: MouseEvent, callback: (data: unknown) => void) {
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
