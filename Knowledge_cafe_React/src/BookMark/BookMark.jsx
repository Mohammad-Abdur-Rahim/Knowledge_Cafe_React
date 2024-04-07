import PropTypes from 'prop-types';
const BookMark = ({bookMarks}) => {
    const {title} = bookMarks;
    return (
        <div className='bg-slate-300 p-4 m-4 rounded-xl'>
            <h2>{title}</h2>
        </div>
    );
};
BookMark.propTypes = {
    bookMarks: PropTypes.object
    
}
export default BookMark;