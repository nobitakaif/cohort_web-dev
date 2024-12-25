import { useState } from "react"
import viteLogo from '/vite.svg'
import { Posts } from "./Posts"

export function PostComponent(){
    const [posts, setPosts]=useState([])
    function addPost(){
        setPosts([...posts,{
            image:viteLogo,
            name:"vite page",
            followers:"12m followers",
            time:"10m ago"
        }])
    }
    console.log(posts)
    const postComponent=posts.map(post =><Posts
        image={post.image}
        name={post.name}
        followers={post.followers}
        time={post.time}
    />)
    return (
        <div>
            <button onClick={addPost}>Add Posts</button>    
            <div style={{width:"98vw",height:"94vh",backgroundColor:"#b2bec3", borderRadius:20, display:'flex',justifyContent:"center", alignItems:"center"}}>
             <div>
               {postComponent}
             </div>

            </div>
        </div>
    )
}