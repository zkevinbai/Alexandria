import { connect } from 'react-redux';
import BookShow from './bookShow';

const mapStateToProps = (storeState) => {
    return{
        actionType: "publicBookShow"
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShow);