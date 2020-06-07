import React from 'react';
import { Component } from 'react';
import './AddPerson.css';

interface PropsAddPerson {
    personAdded: ( name: string, age: number ) => object
}

interface StateAddPerson {
    name: string,
    age: number
}

class AddPerson extends Component<PropsAddPerson, StateAddPerson> {
    state = {
        name: '',
        age: 0,
    };

    onNameHandler = (event: any) => {
        const input = event.target.value;
        this.setState({ name: input })
    };

    onAgeHandler = (event: any) => {
        const input = event.target.value
        this.setState({ age: input })
    };
    
    render() {
        return (
            <div className="AddPerson">
                <input type="text" placeholder="Name" onChange={this.onNameHandler}></input>
                <input type="text" placeholder="Age" onChange={this.onAgeHandler}></input>
                <button onClick={() => {
                    this.props.personAdded(this.state.name, this.state.age);
                    }}>Add Person</button>
            </div>
        );
    }
}
   
export default AddPerson;