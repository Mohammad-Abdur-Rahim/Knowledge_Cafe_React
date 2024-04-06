import PropTypes from 'prop-types';
const BookMark = ({bookMarks}) => {
    const {title} = bookMarks;
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};
BookMark.propTypes = {
    bookMarks: PropTypes.object
    
}
export default BookMark;