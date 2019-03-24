import { connect } from 'react-redux';
import { fetchUserBooks } from '../../actions/bookActions';
import Graph from './graph';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  // debugger;
  const userId = ownProps.match.params.userId;
  
  const books= ownProps.books
  return ({userId, books})
}

const mapDispatchToProps = dispatch => ({
  fetchUserBooks: fetchUserBooks
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Graph));