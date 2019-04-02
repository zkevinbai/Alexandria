import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
export default class searchBarDropdownItem extends Component {
    constructor(props) {
        super(props);
    
        this.publicModal = this.publicModal.bind(this);
        this.userModal = this.userModal.bind(this);
    }


    publicModal(){
        return(
        <Link
            className="query-dropdown-index-item"
            onClick={this.props.clearSearch}
            to={`/book/${this.props.book.volumeId}`}
        >
            <img src={this.props.book.imageUrl} />
            <div className="query-dropdown-index-item-text">
                <h1 className="query-dropdown-index-item-title">
                    {this.props.book.title.slice(0, 50)}
                </h1>

                <h1 className="query-dropdown-index-item-author">
                    {this.props.book.author}
                </h1>
            </div>
        </Link>
    )}

    userModal(){
        return(
        <Link
            className="query-dropdown-index-item"
            onClick={this.props.clearSearch}
            to={`/shelf/${this.props.userId}/book/${this.props.book.volumeId}`}
        >
            <img src={this.props.book.imageUrl} />
            <div className="query-dropdown-index-item-text" >
                <h1 className="query-dropdown-index-item-title">
                    {this.props.book.title.slice(0, 50)}
                </h1>

                <h1 className="query-dropdown-index-item-author">
                    {this.props.book.author}
                </h1>
            </div>
        </Link>
    )}


    render() {
        if(this.props.modalType === "public"){
            return this.publicModal()
        } else if (this.props.modalType === "userNew"){
            return this.userModal()
        }
    }
}

// return this.userNew() add this in when userNew is complete

// render() {
//     if (this.props.modalType === "public") {
//         return this.publicShow()
//     } else if (this.props.modalType === "userNew") {
//         return (
//             <div
//                 className="query-dropdown-index-item"
//                 onClick={this.handleClick(this.props.book)}
//             >
//                 <img src={this.props.book.imageUrl} />
//                 <div
//                     className="query-dropdown-index-item-text"
//                 >
//                     <h1
//                         className="query-dropdown-index-item-title"
//                     >
//                         {this.props.book.title.slice(0, 50)}
//                     </h1>

//                     <h1
//                         className="query-dropdown-index-item-author"
//                     >
//                         {this.props.book.author}
//                     </h1>
//                 </div>
//             </div>
//         )
//     }
// }