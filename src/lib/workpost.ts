import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { Workpostmatter } from '../type/Workpost'

const postdir = path.resolve(process.cwd(), 'posts')

export async function getWorkPostData(id: string) {
   const filepath = path.resolve(postdir, `${id}.md`)
   const fileContents = fs.readFileSync(filepath, 'utf8')

   const matterResult = matter(fileContents)
   const processedContent = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeStringify)

   const contentHtml = await processedContent
      .process(matterResult.content)
      .then((data) => data.toString())

   return matterResult.data as Workpostmatter
}

export async function getAllWorkPostId() {
   const fileNames = fs.readdirSync(postdir)
   return fileNames.map((fileName) => {
      return {
         params: {
            id: fileName.replace(/\.md$/, '')
         }
      }
   })
}
