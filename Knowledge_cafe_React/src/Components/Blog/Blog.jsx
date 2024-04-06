import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title,cover,author_img,reading_time,author,posted_date,hashtags}=blog;
    return (
        <div>
            <img className='w-full' src={cover} alt="" />
            <div className='flex items-center justify-between'>
                <div className='flex gap-5'>
                    <img src={author_img} alt="" />
                <div>
                <h2 className='font-bold text-xl'>{author}</h2>
                <p>{posted_date}</p>
                </div>
                </div>
                <div>{reading_time} <span>Min Read</span></div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
        {
            hashtags.map((hash,idx)=><span key={idx}><a href=''>#{hash}</a></span>)
        }
            </p>
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired
}
export default Blog;