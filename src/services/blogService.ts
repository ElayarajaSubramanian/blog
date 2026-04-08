import {client} from './sanityClient'

export const fetchBlogs = async (start = 0, end = 6) => {
    return await client.fetch(`
            *[_type == "post"] | order(publishedAt desc) [$start...$end]{
                _id,
                title,
                "slug": slug.current,
                body,
                excerpt,
                "imageUrl":mainImage.asset->url,
                publishedAt,
                "categories":categories[]->title
            }
        `, {start, end}
    )
}

export const fetchBlogBySlug = async (slug: string) =>{
    return await client.fetch(`
            *[_type == "post" && slug.current == $slug][0]{
                _id,
                title,
                body,
                "imageUrl":mainImage.asset->url,
                publishedAt,
                "categories":categories[]->title
            }
        `, {slug})
}

export const fetchCategories = async () => {
    return await client.fetch(`
        *[_type == "category"]{
            title,
            "slug": slug.current
            }
        `)
}