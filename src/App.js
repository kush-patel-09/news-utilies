import React,{useState} from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingBar from "react-top-loading-bar";

 const App = () => {
  const [progress, setProgress] = useState(0);
  

   const chengeProgress =(no) =>{
    setProgress({
      progress:no
    });
  }

  
    return (
      <>
      <BrowserRouter>
      <LoadingBar
        color="#f11946"
        progress={progress}
        
      />
      <Navbar/>

      <Routes>
        <Route path='/' element={<News chengeProgress={chengeProgress} key="general" category="general"/>}/>
        <Route path='/Business' element={<News chengeProgress={chengeProgress}  key="Business" category="Business"/>}/>
        <Route path='/Entertainment' element={<News chengeProgress={chengeProgress} key="Entertainment" category="Entertainment"/>}/>
        <Route path='/Health' element={<News chengeProgress={chengeProgress} key="Health" category="Health"/>}/>
        <Route path='/science' element={<News chengeProgress={chengeProgress} key="science" category="science"/>}/>
        <Route path='/Sports' element={<News chengeProgress={chengeProgress} key="Sports" category="Sports"/>}/>
        <Route path='/Technology' element={<News chengeProgress={chengeProgress} key="Technology" category="Technology"/>}/>
      </Routes>
      </BrowserRouter>
      </>
    )
  }


export default App;