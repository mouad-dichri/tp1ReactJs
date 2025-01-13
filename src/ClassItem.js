import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default 
function ClassItem(props){

      return <button style={{
            width: 100, 
            height: 100,
            margin: 10,
            background: props.index % 2?
                         '#ccc':'#eee', 
            color: '#FFF', 
            padding: 10, 
            borderRadius: 7, 
            border:0, 
            
       }}>
           <Link to={`/classes/${props.classe.id}/students`}>
           {props.classe.desc} -
          Etage : {props.classe.etage} </Link> 
    </button>
}