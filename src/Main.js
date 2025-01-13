import { useState } from "react";
import FilterBox from "./FilterBox";
import StudentsList from "./Students";
import ClassList from "./ClassList";
import { Route,Routes } from "react-router-dom";
import Posts from "./Posts";

export default function Main(){
      const [search, setSeacrh] = useState('');
      return <div 
               style={{display: 'flex', 
               flexDirection: 'column'}}>
            <FilterBox 
              handleSearch={(value) => 
               setSeacrh(value)}/>
            <Routes>
                  <Route path="/" element={<StudentsList search={search}/>}/>
                  <Route path="/classes" element={<ClassList search={search}/>}/>
                  <Route path="/classes/:id/students" element={<StudentsList search={search}/>}/>
                  <Route path="/posts" element={<Posts search={search}/>}/>
            </Routes>
          
      </div>;
}