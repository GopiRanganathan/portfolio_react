import pages from './data';
import React from 'react';
import Navbar from './navbar';
import Home from './home';
import About from './about';
import Project from './project';
import Contact from './contact';
import BottomIcon from './bottom_icon';
import './App.css';

function App() {
  const [page, setPage] = React.useState('home');
  const [isActive, setIsActive] =React.useState(0);

  const pageNavigate = () =>{
    if(page.text === 'home'){
     

      return <Home />
    }
    if (page.text === 'about'){
 

      return <About />
    }
    if(page.text === 'project'){
     

      return <Project />
    }
    if(page.text === 'contact'){
    

      return <Contact />
    }
  }
React.useEffect(()=>{

},[page])
  return (
    <div className="App">
      <Navbar setPage={setPage} page={page} isActive={isActive} setIsActive={setIsActive} />
      
     { pageNavigate() || <Home /> }



     <BottomIcon setPage={setPage}  isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}

export default App;
