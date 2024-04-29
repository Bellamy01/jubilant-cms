export interface Post {
    title: string;
    slug: { current: string };
    publishedAt: Date;
    body: any;
    author: Author;
    mainImage: { alt: string, asset: { url: string }  }
    category: Category;
    _id: string;
}

export interface Author {
    name: string;
    slug: { current: string };
    bio: any;
    _id: string;
}

export interface Category { 
    title: string;
    slug: { current: string };
    description: string;
    _id: string;
}