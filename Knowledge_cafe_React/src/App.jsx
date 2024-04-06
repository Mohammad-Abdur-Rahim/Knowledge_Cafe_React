import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'


function App() {
const [bookMarks,setBookMarks]=useState([]);

const addBookMarks=blog=>{
  const newbook =[...bookMarks,blog];
  setBookMarks(newbook);
}

  return (
    <>
     
   <Header></Header>
 <div className='md:flex max-w-7xl mx-auto'>
  <Blogs addBookMarks={addBookMarks}></Blogs>
  <BookMarks bookMarks={bookMarks}></BookMarks>
 </div>
     
    </>
  )
}

export default App
