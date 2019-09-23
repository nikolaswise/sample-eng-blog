const contentful = require('contentful')

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "824snky1m1rs",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "aKVgNIOzSU9Yf-BFUt9Yg4kmO7U9aisbU43KMSmgxn4"
})

const fetchEntryByContentIdAndSlug = (id, slug) => client.getEntries({
    content_type: id,
    'fields.slug[in]': slug
  })
  .then((response) => response.items[0])
  .catch((error) => {
    console.error(error)
  })

const fetchEntriesForContentId = (id, orderBy) => client.getEntries({
    content_type: id,
    order: orderBy
  })
  .then((response) => {
    return response.items
  })
  .catch((error) => {
    console.error(error)
  })

export const getArticles = () => fetchEntriesForContentId('article')
export const getArticle = (slug) => fetchEntryByContentIdAndSlug('article', slug)