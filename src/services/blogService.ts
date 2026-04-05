import {client} from './sanityClient'

export const fetchBlogs = async () => {
    return await client.fetch(`
            *[_type == "post"]{
                _id,
                title,
                "slug": slug.current,
                body,
                excerpt,
                "imageUrl":mainImage.asset->url,
                publishedAt
            }
        `)
}

export const fetchBlogBySlug = async (slug: string) =>{
    return await client.fetch(`
            *[_type == "post" && slug.current == $slug][0]{
                _id,
                title,
                body,
                "imageUrl":image.asset->url,
                publishedAt
            }
        `, {slug})
}