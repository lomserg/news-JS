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
