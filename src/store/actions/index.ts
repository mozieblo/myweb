import { Action } from 'redux';
import { ADD_PERSON, DELETE_PERSON } from '../constants/actionTypes';

export interface StartAdd extends Action {
    type: typeof ADD_PERSON,
    personData: PersonData
}

type PersonData = {
    name: string,
    age: number
}

export interface StartDelete extends Action {
    type: typeof DELETE_PERSON,
    id: number
}

export const saveAddPerson = ( name: string, age: number ) => {
    return {
        type: ADD_PERSON,
        personData: {
            name,
            age
        }
    }
};

export const addPerson = ( name: string, age: number ) => {
    return (dispatch: (saveAddPerson1: { personData: { name: string; age: number }; type: string }) => object)=> {
        setTimeout( () => {
            dispatch(saveAddPerson( name, age ))
        }, 2000)
    }
};

export const deletePerson = ( personId: number ) => {
    return {
        type: DELETE_PERSON,
        id: personId
    }
};