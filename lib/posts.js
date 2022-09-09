import fs from 'fs';
import matter from 'gray-matter';
import path from 'path'
import { remark } from 'remark';
import html from 'remark-html';


const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
    // "ls" postsDirectory
    const fileNames =  fs.readdirSync(postsDirectory);

    const allPostsData = fileNames.map(filename => {
        const id = filename.replace(/\.md$/, '');

        const fullPath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data
        }
    })

    return allPostsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map(filename => {
        return {
            params: {
                id: filename.replace(/\.md$/, ''),
            }
        }
    })
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterOutput = matter(fileContents);

    const processedContent = await remark().use(html).process(matterOutput.content);
    const postHtml = processedContent.toString();

    return {
        id,
        postHtml,
        ...matterOutput.data,
    }
}
