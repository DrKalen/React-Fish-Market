import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    render() {
        return (
            //This kind of comment is fine in React except inside JSX
            <form className="store-selector">
                { /* Notice this is how to do a comment INSIDE JSX! */ }
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" 
                    default value={getFunName()} />
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker;