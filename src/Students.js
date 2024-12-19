import StudentItem from "./StudentItem";
import { useState } from 'react';
export default function Students(props) {

    const [key, setKey] = useState("");

    return <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div><input type="text" name="kw" value={key} onChange={(e) => setKey(e.target.value)} /></div>
      <div>   {props.list.filter((std) => { return std.nom.includes(key.toUpperCase()) || std.prenom.includes(key.toUpperCase()) })
            .map((std, idx) => {

                return <div><StudentItem key={std.id} student={std} index={idx} /></div>
            }
            )}</div>
     
    </div>


}