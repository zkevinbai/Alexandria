import React from 'react';

export default class searchBarDropdownItem extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div
                className="query-dropdown-index-item"
            >
                <img src={book.imageUrl} />
                <h1>{book.title}</h1>
            </div>
        )
    }
}
