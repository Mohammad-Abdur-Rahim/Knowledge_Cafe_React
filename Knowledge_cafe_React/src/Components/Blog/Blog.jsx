import PropTypes from 'prop-types';
import { IoBookmarks } from "react-icons/io5";

const Blog = ({ blog, addBookMarks,markRead }) => {
    const {id, title, cover, author_img, reading_time, author, posted_date, hashtags } = blog;
    return (
        <div className='pl-5'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex items-center justify-between pt-10'>
                <div className='flex gap-5'>
                    <img src={author_img} alt="" />
                    <div>
                        <h2 className='font-bold text-xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>{reading_time} <span>Min Read </span>
                    <button onClick={()=>addBookMarks(blog)}><IoBookmarks />
                    </button></div>
            </div>
            <div className='pb-5'>
                <h2 className='text-5xl font-bold pt-5 pb-5'>{title}</h2>
                <p>
                    {
                        hashtags.map((hash, idx) => <span key={idx}><a href=''> {hash}</a></span>)
                    }
                </p>
                <button onClick={()=>markRead(id,reading_time)} className='mt-3 bg-green-300 rounded-xl p-2'>Mark As Read</button>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    addBookMarks: PropTypes.func,
    markRead:PropTypes.func
}
export default Blog;