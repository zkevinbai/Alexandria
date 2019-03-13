import { connect } from 'redux';
import BookShow from './bookShow';
import { addUserBook } from '../../../actions/bookActions';

const mapStateToProps = (storeState) = {

};

const mapDispatchToProps = (dispatch) = ({
    action: (data) => dispatch(addUserBook(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookShow);