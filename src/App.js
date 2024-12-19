import logo from './logo.svg';
import './App.css';
import Student from './Students';


function App() {
  
  const students=[
    {id:0,nom:'DICHRI',prenom:'MOUAD'},
    {id:1,nom:'SALMI',prenom:'MED'},
    {id:2,nom:'ALAOUI',prenom:'AHMED'},
    {id:0,nom:'LOTFI',prenom:'AMINA'},
    {id:1,nom:'SALO',prenom:'GHIZLANE'}
];
  return (
    <div className="App" style={{padding:20}}>

     
    <Student list={students} />
    </div>
  );
}

export default App;
