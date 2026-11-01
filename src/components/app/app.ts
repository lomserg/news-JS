import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import type { NewsResponse } from '../../types';
import type { SourcesResponse } from '../../types';
class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sources = document.querySelector<HTMLElement>('.sources');
        if (!sources) {
            throw new Error('Element .sources not found');
        }
        sources.addEventListener('click', (e: MouseEvent) =>
            this.controller.getNews(e, (data: NewsResponse) => this.view.drawNews(data))
        );
        this.controller.getSources((data: SourcesResponse) => this.view.drawSources(data));
    }
}

export default App;
