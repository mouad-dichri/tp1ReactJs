import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default 
function PostItem(props){

      return <button style={{
            width: 100, 
            height: 100,
            margin: 10,
            background: props.index % 2?
                         '#ccc':'#eee', 
            color: 'black', 
            padding: 10, 
            borderRadius: 7, 
            border:0, 
            
       }}>
         {props.post.title} 
        
    </button>
}