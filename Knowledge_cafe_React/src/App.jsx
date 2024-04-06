import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'


function App() {
const [bookMarks,setBookMarks]=useState([]);

const addBookMarks=blog=>{
  console.log('adding book');
}

  return (
    <>
     
   <Header></Header>
 <div className='md:flex max-w-7xl mx-auto'>
  <Blogs addBookMarks={addBookMarks}></Blogs>
  <BookMarks></BookMarks>
 </div>
     
    </>
  )
}

export default App
