import { useState } from "react";
import StudentItem from "./StudentItem";
import Welcome from "./Welcome";
import ClassItem from "./ClassItem";

export default function ClassList(props){
      
      const classes = [
           {id: 0, desc: 'class1', 
             etage: '1'},
           {id: 1, desc: 'class2', 
            etage: '1'},
           {id: 2, desc: 'class3', 
            etage: '2'},
            {id: 3, desc: 'class4', 
                etage: '2'},
              {id: 4, desc: 'class5', 
                etage: '3'},
                {id: 5, desc: 'class6', 
                    etage: '4'},
                  {id: 6, desc: 'class8', 
                    etage: '3'},
                    {id: 7, desc: 'class9', 
                        etage: '10'},
      ];

      
      return <div 
               style={{display: 'flex', flexWrap: 'wrap'}}>
           {classes
              .filter(cla => cla.desc.toLowerCase().includes(props.search)
                      || cla.etage.toLowerCase().includes(props.search))
              .map((cla, idx) => {
              
             return <ClassItem 
                  key={cla.id} 
                  classe={cla}
                  index={idx}
                  />
            })}
            
      </div>;
     }