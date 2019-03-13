import {connect} from 'redux';
import BookShow from './bookShow';
import { removeUserBook } from '../../../actions/bookActions';

const mapStateToProps = (storeState) = {

};

const mapDispatchToProps = (dispatch) = ({
    action: (data) => dispatch(removeUserBook(data)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(BookShow);