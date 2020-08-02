import React, { Component } from 'react'

class AddPeople extends Component {
    state = {
        name: null,
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    state = {
        count: 0
    };
    
    handleSubmit = (e) => {
        e.preventDefault();

        e.target.reset();
        this.setState(({ count }) => ({
            count: count + 1
        }));
         this.props.addHuman(this.state);
    }

    render() {
        return (
        <div className="type-area-outer">
                <div className="type-area">
                    <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Insert name and surname:</label>
                    <input
                        pattern="^[a-zA-Z\s]+"
                        required
                        type="text"
                        minLength="5"
                        id="name"
                        onChange={this.handleChange}
                    ></input>
                    <button>Submit</button>
                    </form>
                </div>
            <p className="counter">Names counter: { this.state.count }</p>
          </div>
            );
    }
}

export default AddPeople;