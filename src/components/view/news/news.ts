import './news.css';
import type { Article } from '../../../types';
class News {
    draw(data: Article[]) {
        const news = data.slice(0, 10);

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');
        if (!newsItemTemp) {
            return;
        }
        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;
            if (idx % 2) {
                const newsItem = newsClone.querySelector<HTMLElement>('.news__item');

                if (newsItem) {
                    newsItem.classList.add('alt');
                }
            }

            const photo = newsClone.querySelector<HTMLElement>('.news__meta-photo');
            if (photo) {
                photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }

            const author = newsClone.querySelector<HTMLElement>('.news__meta-author');
            if (author) {
                author.textContent = item.author || item.source.name;
            }
            const date = newsClone.querySelector<HTMLElement>('.news__meta-date');
            if (date) {
                date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            const titleElem = newsClone.querySelector<HTMLElement>('.news__description-title');
            if (titleElem) {
                titleElem.textContent = item.title;
            }
            const sourceElem = newsClone.querySelector<HTMLElement>('.news__description-source');
            if (sourceElem) {
                sourceElem.textContent = item.source.name;
            }

            const descElem = newsClone.querySelector<HTMLElement>('.news__description-content');
            if (descElem) {
                descElem.textContent = item.description;
            }

            const linkReadMore = newsClone.querySelector<HTMLAnchorElement>('.news__read-more a');
            if (linkReadMore) {
                linkReadMore.setAttribute('href', item.url);
            }
            fragment.append(newsClone);
        });

        const newsElem = document.querySelector<HTMLElement>('.news');
        if (newsElem) {
            newsElem.innerHTML = '';
            newsElem.appendChild(fragment);
        }
        // document.querySelector('.news').appendChild(fragment);
    }
}

export default News;
