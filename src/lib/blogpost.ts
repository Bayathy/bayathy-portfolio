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
      const fileName = index.replace(/\.md/, '')
      const fullPath = path.join(postdir, `${index}.md`)
   })
}

export async function getAllBlogPostId() {
   const fileNames = fs.readdirSync(postdir)
   return fileNames.map((fileName) => {
      return {
         params: {
            id: fileName.replace(/\.md$/, '')
         }
      }
   })
}
