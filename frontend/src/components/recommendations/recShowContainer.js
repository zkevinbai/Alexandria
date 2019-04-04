import { connect } from 'react-redux';
import BookShowModal from '../books/bookShowModal/BookShowModal';
import { addUserBook } from '../../actions/bookActions';

const mapStateToProps = (state, ownProps) => {
  const modalType = "userBookShow";
  const actionType = "addBook";
  const userId = state.session.user.id;  
  const isRec = true;
  const bookId = ownProps.match.params.recId;
  return ({ modalType, actionType, userId, bookId, isRec})
};

const mapDispatchToProps = dispatch => ({
  addUserBook: data => dispatch(addUserBook(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(BookShowModal);

