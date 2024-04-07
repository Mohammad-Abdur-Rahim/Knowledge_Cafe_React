import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'


function App() {
  const [reading,setReading]=useState(0);

  const markRead =time=>{
const newReadTime=reading + time;
setReading(newReadTime);
  }


const [bookMarks,setBookMarks]=useState([]);

const addBookMarks=blog=>{
  const newbook =[...bookMarks,blog];
  setBookMarks(newbook);
}

  return (
    <>
     
   <Header></Header>
 <div className='md:flex max-w-7xl mx-auto'>
  <Blogs addBookMarks={addBookMarks} markRead={markRead}></Blogs>
  <BookMarks bookMarks={bookMarks} reading={reading}></BookMarks>
 </div>
     
    </>
  )
}

export default App
