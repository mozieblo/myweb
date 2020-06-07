import * as actionTypes from '../constants/actionTypes';
import { StartAdd, StartDelete } from "../actions";

export const initialState = {
    persons: []
};

const reducer = (state = initialState, action: StartAdd | StartDelete) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(),
                name: action.personData.name,
                age: action.personData.age /*Math.floor( Math.random() * 40 )*/
            };
            return {
                persons: state.persons.concat(newPerson as any)
            };
        case actionTypes.DELETE_PERSON:
            const updatedArray = state.persons.filter((person: any) => person.id !== action.id);
            return {
                persons: updatedArray
            };
        default:
            return state;
    }
};

export default reducer;