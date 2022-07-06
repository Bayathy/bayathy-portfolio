import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { BlogpostMatter } from '../type/Blogpost'

const postdir = path.resolve(process.cwd(), 'blogposts')

export async function getBlogPostData(id: string) {
   const filepath = path.resolve(postdir, `${id}.md`)
   const fileContents = fs.readFileSync(filepath, 'utf8')

   const matterResult = matter(fileContents)
   const processedContent = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeStringify)

   const content = await processedContent
      .process(matterResult.content)
      .then((data) => data.toString())

   const result = { content, ...matterResult.data }

   return result as BlogpostMatter
}

export function getSortedPostsData() {
   const files = fs.readdirSync(postdir)
   const AllPostData = files.map((index) => {
      const id = index.replace(/\.md/, '')
      const fullPath = path.join(postdir, index)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)
      return { id, ...(matterResult.data as { title: string; date: string }) }
   })

   return AllPostData.sort((a, b) => {
      return a.date < b.date ? 1 : -1
   })
}

export async function getAllBlogPostId() {
   const files = fs.readdirSync(postdir)
   const AllPostDataId = files.map((index) => {
      const id = index.replace(/\.md/, '')
      return id
   })
   return AllPostDataId.map((index) => {
      return {
         params: {
            id: index
         }
      }
   })
}
