import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { WorkPostmatter } from '../type/Workpost'

const postdir = path.resolve(process.cwd(), 'workposts')

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

   const content = contentHtml.replace(/<p>|<\/p>/g, '')

   const result = { content, ...matterResult.data }

   return result as WorkPostmatter
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

export async function getAllWorksProperty() {
   const fileNames = fs.readdirSync(postdir)
   const fileid = fileNames.map((fileName) => fileName.replace(/\.md$/, ''))

   return fileid.map(async (index) => await getWorkPostData(index))
}
