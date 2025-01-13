import { Link,Route,Routes } from "react-router-dom";
import ClassList from "./ClassList";
import StudentsList from "./Students";


export default function MenuLeft(){
      return <div 
               style={{display: 'flex', 
               flexDirection: 'column'}}>
            Menu left

            <div>

<div><Link to='/'><button>Students</button></Link></div>
<div><Link to="/classes"><button>Classes</button></Link></div>
<div><Link to="/posts"><button>Posts</button></Link></div>

            </div>
         
      </div>;
}