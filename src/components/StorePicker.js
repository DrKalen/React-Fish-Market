import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    goToStore (event) {
        event.preventDefault();
        console.log('You changed the URL');
        //first grab the text from the box
        const storeID = this.storeInput.value;
        console.log(`Going to ${storeID}`);
        //second transition from url = / to /store/:storeId
        this.context.router.transitionTo(`/store/${storeID}`);

    }

    render() {
        //This kind of comment is fine in React except inside JSX
        return (
            <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
                { /* Notice this is how to do a comment INSIDE JSX! */ }
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" 
                    defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}
export default StorePicker;