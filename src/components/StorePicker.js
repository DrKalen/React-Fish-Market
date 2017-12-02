import React from 'react';

class StorePicker extends React.Component {
    render() {
        return (
            //This kind of comment is fine in React except inside JSX
            <form className="store-selector">
                { /* Notice this is how to do a comment INSIDE JSX! */ }
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker;