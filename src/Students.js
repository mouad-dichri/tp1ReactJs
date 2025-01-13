import { useState } from "react";
import StudentItem from "./StudentItem";
import Welcome from "./Welcome";
import { useParams } from "react-router-dom";

export default function StudentsList(props){
      
  const params=useParams();
      const students = [
           {id: 0, first_name: 'test1', 
             last_name: 'AAA',classe_id:1},
           {id: 1, first_name: 'test2', 
             last_name: 'BBB',classe_id:2},
           {id: 2, first_name: 'test3', 
            last_name: 'CCC',classe_id:3},
            {id: 3, first_name: 'test3', 
              last_name: 'CCC',classe_id:0},
              {id: 4, first_name: 'test3', 
                last_name: 'CCC',classe_id:0},
                {id: 5, first_name: 'test3', 
                  last_name: 'CCC',classe_id:1},
                  {id: 6, first_name: 'test3', 
                    last_name: 'CCC',classe_id:2},
                    {id: 7, first_name: 'test3', 
                      last_name: 'CCC',classe_id:0},
      ];
      let students_list = students
      .filter(std => (!params.id || params.id == std.classe_id));
      
      return <div 
               style={{display: 'flex', flexWrap: 'wrap'}}>
           {(students_list.length>0)?students_list
              .filter(std => std.first_name.toLowerCase().includes(props.search)
                      || std.last_name.toLowerCase().includes(props.search)
                      )
              .map((std, idx) => {
              
             return <StudentItem 
                  key={std.id} 
                  student={std}
                  index={idx}
                  />
            }):'Cette classe ne contient aucun élève'}
            
      </div>;
     }