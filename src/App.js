import Header from "./Header";
import Main from "./Main";
import MenuLeft from "./MenuLeft";
import {BrowserRouter} from 'react-router-dom'
// import StudentsList from "./Students";
// import Welcome, { Welcome3 } from "./Welcome";



function App() {
  return (
    <BrowserRouter>
    <div style={{padding: 20, 
        display: 'flex'}}>
      <div style={{width: 200, 
        border: '1px solid #ccc'}}>
        <MenuLeft/>
      </div>
      <div style={{display: 'flex', 
        flexDirection:'column', 
        flex: 1, border: '1px solid #ccc'}}>
        <Header/>
        <Main/>
      </div>
    </div></BrowserRouter>
  );
}

export default App;
