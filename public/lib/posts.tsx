import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const postsDirectory=path.join(process.cwd(), 'blogposts')

export function getSortedPostsData(){
    const fileName= fs.readdirSync(postsDirectory)
    const allPostsData=fileName.map((fileName)=>{
        const id=fileName.replace(/\.md>$/,'');

        const fullPath=path.join(postsDirectory, fileName);
        const fileContents=fs.readFileSync(fullPath, 'utf8');

        const matterResult=matter(fileContents);

        const blogPost: BlogPost={
            id,
            title:matterResult.data.title,
            date:matterResult.data.date,
        }

        //Combine the data with the id

        return blogPost
    });

    // Sort posts by data
    return allPostsData.sort((a,b)=>a.date<b.date ? 1 :-1);
}