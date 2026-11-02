export interface Source {
    name: string;
    id: string | null;
}

export interface Article {
    author: string | null;
    urlToImage: string | null;
    publishedAt: string;
    title: string;
    description: string | null;
    url: string;
    source: Source;
}
export interface NewsResponse {
    articles: Article[];
}

export interface SourcesResponse {
    sources: Source[];
}
export enum ApiEndpoint {
    Sources = 'sources',
    Everything = 'everything',
}
export type ArticlePreview = Pick<Article, 'title' | 'url' | 'publishedAt'>;
export type ArticleUpdate = Partial<Article>;
export type ReadonlyArticle = Readonly<Article>;
