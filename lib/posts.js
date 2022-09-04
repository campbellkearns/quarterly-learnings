import fs from 'fs';
import matter from 'gray-matter';
import path from 'path'


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