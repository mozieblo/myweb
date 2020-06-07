import React, {Component} from 'react';
import {connect} from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionCreators from '../store/actions';
import { PersonsArray, IInitialState } from '../store/reducers/persons';

interface PropsPersons {
    persons: PersonsArray[],
    addPersonHandler: ( name: string, age: number ) => object,
    deletePersonHandler: ( personId: number ) => object
}

class Persons extends Component<PropsPersons> {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.addPersonHandler} />
                {this.props.persons && this.props.persons.map((person: PersonsArray) => {
                    return (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.deletePersonHandler(person.id)}/>);
                })}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
      persons: state.persons.persons
    }
};

const mapDispatchToProps = (dispatch: any) => {
      return {
        // addPersonHandler: (name, age) => dispatch({ type: actionTypes.ADD_PERSON, personData: { name, age } }),
        // deletePersonHandler: (personId) => dispatch({ type: actionTypes.DELETE_PERSON, id: personId })
        addPersonHandler: ( name: string, age: number ) => dispatch(actionCreators.addPerson( name, age )),
        deletePersonHandler: ( personId: number ) => dispatch(actionCreators.deletePerson( personId ))
      }
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);