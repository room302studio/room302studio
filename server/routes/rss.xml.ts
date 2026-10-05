import { queryCollection } from '@nuxt/content/server'

const SITE_URL = 'https://room302.studio'

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

export default defineEventHandler(async (event) => {
  const posts = await queryCollection(event, 'blog').order('date', 'DESC').all()

  // Filtered in JS rather than SQL: a `<>` comparison in the query builder also
  // drops rows where the column is NULL, which is every post that simply omits
  // the flag.
  const published = posts.filter(
    (post) => !post.draft && !post.hidden && !post.inprogress
  )

  const items = published
    .map((post) => {
      const url = `${SITE_URL}${post.path}`
      const date = new Date(post.date ?? Date.now()).toUTCString()

      return `    <item>
      <title>${escapeXml(post.title ?? 'Untitled')}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${date}</pubDate>
      <description>${escapeXml(post.description ?? '')}</description>
    </item>`
    })
    .join('\n')

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Room 302 Studio</title>
    <link>${SITE_URL}</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Writing from Room 302 Studio.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`

  event.node.res.setHeader('content-type', 'application/rss+xml; charset=utf-8')
  event.node.res.end(feed)
})
