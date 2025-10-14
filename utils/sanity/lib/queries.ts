import { defineQuery } from 'next-sanity'

export const TEMPLATE_QUERY = defineQuery(`*[_type == "template" && slug.current == $name][0]`);
export const ABOUT_QUERY = defineQuery(`*[_type == "about" ][0]{ title, publishedAt,recap, body}`);

export const TEMPLATES_QUERY =defineQuery( `*[
  _type == "template"
  && defined(slug.current)
]|order(publishedAt asc){_id, title, slug, publishedAt,cover}`);

export const TEMPLATES_QUERY_LIMIT = defineQuery( `*[
  _type == "template"
  && defined(slug.current)
]|order(publishedAt asc)[0...3]{_id, title, slug, publishedAt,cover}`);

//*options
export const optionsRevalidate = { next: { revalidate: 30 } };