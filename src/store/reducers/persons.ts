import * as actionTypes from '../constants/actionTypes';
import { StartAdd, StartDelete } from "../actions";

export interface IInitialState {
    persons: PersonsArray[]
}

export type PersonsArray = {
    id: number,
    name: string,
    age: number
}

export const initialState: IInitialState = {
    persons: []
};

export default (state: IInitialState = initialState, action: StartAdd | StartDelete) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(),
                name: action.personData.name,
                age: action.personData.age /*Math.floor( Math.random() * 40 )*/
            };
            return {
                persons: state.persons.concat(newPerson)
            };
        case actionTypes.DELETE_PERSON:
            const updatedArray = state.persons.filter((person: PersonsArray) => person.id !== action.id);
            return {
                persons: updatedArray
            };
        default:
            return state;
    }
};