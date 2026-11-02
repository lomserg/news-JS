import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import type { NewsResponse, SourcesResponse } from '../../types';
class App {
    private controller: AppController;
    private view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start() {
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
