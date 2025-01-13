import { useEffect, useState } from "react";
import StudentItem from "./StudentItem";
import Welcome from "./Welcome";
import ClassItem from "./ClassItem";
import PostItem from "./PostItem";

export default function Posts(props){
      
     const [posts,setPosts]=useState([]);
      useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=> {return setPosts(data);})

      },[])
      console.log(posts.length)
      return <div 
               style={{display: 'flex', flexWrap: 'wrap'}}>
           {posts
               .filter(cla => cla.title.toLowerCase().includes(props.search)
                     )
              .map((pos, idx) => {
              
             return <PostItem 
                  key={pos.id} 
                  post={pos}
                  index={idx}
                  />
            })}
            
      </div>;
     }