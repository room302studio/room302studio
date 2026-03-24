#!/usr/bin/env node
import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import readline from 'readline'

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const ask = (q) => new Promise((resolve) => rl.question(q, resolve))

const slugify = (str) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const today = () => new Date().toISOString()

const contentDir = join(new URL('.', import.meta.url).pathname, '..', 'content')

async function newBlog() {
  const title = await ask('Title: ')
  const author = (await ask('Author [EJ Fox]: ')) || 'EJ Fox'
  const authorEmail = (await ask('Email [ejfox@room302.studio]: ')) || 'ejfox@room302.studio'
  const description = await ask('Description (one line): ')
  const tags = await ask('Tags (space-separated): ')
  const category = await ask('Category: ')
  const image = await ask('Image path (optional, e.g. /blog-images/my-post.png): ')

  const slug = slugify(title)
  const dir = join(contentDir, 'blog')
  const filePath = join(dir, `${slug}.md`)

  if (existsSync(filePath)) {
    console.error(`\n  File already exists: ${filePath}`)
    process.exit(1)
  }

  const frontmatter = [
    '---',
    `title: "${title}"`,
    `date: ${today()}`,
    `author: ${author}`,
    `authorEmail: ${authorEmail}`,
    description && `description: "${description}"`,
    tags && `tags: ${tags}`,
    category && `category: ${category}`,
    image && `image: "${image}"`,
    '---',
  ].filter(Boolean).join('\n')

  const content = `${frontmatter}

# ${title}

${description ? description + '\n' : ''}
`

  writeFileSync(filePath, content)
  console.log(`\n  Created: content/blog/${slug}.md`)
  console.log(`  Run \`yarn dev\` and visit http://localhost:3302/blog/${slug}`)
}

async function newProject() {
  const type = await ask('Type — (c)lient or (i)nternal? [c]: ')
  const isInternal = type.toLowerCase().startsWith('i')

  const title = await ask('Title: ')
  const description = await ask('Description: ')
  const date = (await ask(`Date [${new Date().toISOString().slice(0, 10)}]: `)) || new Date().toISOString().slice(0, 10)

  let extraFrontmatter = ''
  if (!isInternal) {
    const client = await ask('Client: ')
    const brief = await ask('Brief (short tagline): ')
    const role = await ask('Role (e.g. Data Visualization Development): ')
    const technology = await ask('Technology (e.g. React, D3, Mapbox): ')
    const url = await ask('URL (optional): ')
    const tags = await ask('Tags (comma-separated, e.g. dataviz, mapping): ')
    const image = await ask('Image path (e.g. /our-work-images/project.png): ')

    extraFrontmatter = [
      `client: "${client}"`,
      `brief: "${brief}"`,
      `role: "${role}"`,
      `technology: "${technology}"`,
      image && `image: "${image}"`,
      url && `url: "${url}"`,
      tags && `tags: [${tags.split(',').map(t => `"${t.trim()}"`).join(', ')}]`,
    ].filter(Boolean).join('\n')
  } else {
    const image = await ask('Image path (optional): ')
    if (image) extraFrontmatter = `image: "${image}"`
  }

  const slug = slugify(title)
  const subdir = isInternal ? 'our-work/internal' : 'our-work/client-work'
  const dir = join(contentDir, subdir)
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
  const filePath = join(dir, `${slug}.md`)

  if (existsSync(filePath)) {
    console.error(`\n  File already exists: ${filePath}`)
    process.exit(1)
  }

  const frontmatter = [
    '---',
    `title: "${title}"`,
    `description: "${description}"`,
    `date: "${date}"`,
    extraFrontmatter,
    '---',
  ].filter(Boolean).join('\n')

  const content = `${frontmatter}

# ${title}

${description}
`

  writeFileSync(filePath, content)
  console.log(`\n  Created: content/${subdir}/${slug}.md`)
  console.log(`  Run \`yarn dev\` and visit http://localhost:3302/${subdir}/${slug}`)
}

async function newMember() {
  const name = await ask('Name: ')
  const role = await ask('Role: ')
  const email = await ask('Email: ')
  const website = await ask('Website URL: ')
  const photo = await ask('Photo path (e.g. /member-headshots/name.png): ')

  const slug = slugify(name)
  const dir = join(contentDir, 'members')
  const filePath = join(dir, `${slug}.md`)

  if (existsSync(filePath)) {
    console.error(`\n  File already exists: ${filePath}`)
    process.exit(1)
  }

  const frontmatter = [
    '---',
    `name: ${name}`,
    `authorEmail: ${email}`,
    `role: ${role}`,
    website && `website: ${website}`,
    photo && `photo: '${photo}'`,
    '---',
  ].filter(Boolean).join('\n')

  const content = `${frontmatter}

${name} bio goes here.
`

  writeFileSync(filePath, content)
  console.log(`\n  Created: content/members/${slug}.md`)
}

// Main
const command = process.argv[2]

if (!command || !['blog', 'project', 'member'].includes(command)) {
  console.log(`
  Usage:
    yarn new:blog       Create a new blog post
    yarn new:project    Create a new project (client or internal)
    yarn new:member     Create a new team member
  `)
  process.exit(0)
}

try {
  if (command === 'blog') await newBlog()
  else if (command === 'project') await newProject()
  else if (command === 'member') await newMember()
} finally {
  rl.close()
}
