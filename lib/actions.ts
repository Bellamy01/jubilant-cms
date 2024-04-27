import { client } from "@/sanity/lib/client"
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export async function getPosts() {
    const query = `
    *[_type=="post"] {
        title,
        mainImage,
        author->{name},
        publishedAt,
        slug,
        categories[]->{
            _id,
            slug,
            title
        }
    }`
    const data = await client.fetch(query);
    return data;
}

export async function getPost(slug: string) {
    const query = `
    *[_type=="post" && slug.current =="${slug}"][0] {
        title,
        mainImage,
        author->{name},
        publishedAt,
        body,
        slug,
        categories[]->{
            _id,
            slug,
            title
        }
    }`;

    const data =  await client.fetch(query);
    return data;
}

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);