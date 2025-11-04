import { serverQueryContent } from '#content/server'
import RSS from 'rss'

export default defineEventHandler(async (event) => {
  const feed = new RSS({
    title: 'Room 302 Studio Blog',
    description: 'Innovation lab insights: rapid prototyping, data visualization mastery, and our 0-60 approach to building the future.',
    feed_url: 'https://room302studio.com/rss.xml',
    site_url: 'https://room302studio.com',
    language: 'en',
    pubDate: new Date(),
    ttl: 60,
  })

  const posts = await serverQueryContent(event, 'blog')
    .where({ hidden: { $ne: true }, inprogress: { $ne: true } })
    .sort({ date: -1 })
    .find()

  for (const post of posts) {
    feed.item({
      title: post.title || 'Untitled',
      url: `https://room302studio.com${post._path}`,
      date: post.date || new Date(),
      description: post.description || '',
      author: post.author || 'Room 302 Studio',
    })
  }

  const feedString = feed.xml({ indent: true })

  event.node.res.setHeader('content-type', 'text/xml')
  event.node.res.end(feedString)
})
