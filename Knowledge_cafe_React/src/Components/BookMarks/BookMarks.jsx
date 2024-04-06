import BookMark from "../../BookMark/BookMark";
import PropTypes from 'prop-types';

const BookMarks = ({bookMarks}) => {
    return (
        <div className="md:1/3 mt-5 ml-5 bg-lime-100">
            <h2 className="text-3xl">Spent time on read : <span>{bookMarks.length}</span> min</h2>
            {
                bookMarks.map((book,idx)=><BookMark key={idx} bookMarks={book}></BookMark>)
            }
        </div>
    );
};
BookMarks.propTypes = {
    bookMarks: PropTypes.object
    
}

export default BookMarks;