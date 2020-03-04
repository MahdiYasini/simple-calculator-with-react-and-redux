import * as actionTypes from '../actions';

const initialState = {
    variable: [0],
    mainVariable: [],
    operator: '',
    result: 0,
    flag: true
}

const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CLEAN:
            return {
                ...state,
                variable: [0],
                mainVariable: [],
                operator: '',
                flag: true,
                result: 0
            };
        case actionTypes.ADD_NUMBER:
            return {
                ...state,
                variable: [...state.variable, action.value],
                flag: false
            };
        case actionTypes.OPERATOR:
            return {
                ...state,
                mainVariable: [...state.mainVariable, state.operator, state.variable.join('').slice(1)],
                variable: [0],
                operator: action.operator,
                flag: true,
            };
        case actionTypes.EQUAL:
            return {
                ...state,
                operator: '',
                result: eval([...state.mainVariable, state.operator, state.variable.join('').slice(1)].join('')),
                mainVariable: [],
                variable: [0],
                flag: true
            };
        default:
            return state;
    }
};

export default calculatorReducer;