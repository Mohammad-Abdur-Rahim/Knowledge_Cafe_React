import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({addBookMarks,markRead}) => {
    const [blogs,setBlogs] =useState([]);
    useEffect(()=>{
        fetch('Blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[]);

    return (
        <div className="md:w-2/3 mt-5">
          
           {
            blogs.map(blog=><Blog 
                key={blog.id} 
                blog={blog} addBookMarks={addBookMarks}
                markRead={markRead}>
                    
                </Blog>)
           }
        </div>
    );
};
Blogs.propTypes = {
    blogs: PropTypes.object.isRequired,
    addBookMarks: PropTypes.func,
    markRead:PropTypes.func
}
export default Blogs;