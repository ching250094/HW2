import { SET_NUMBER, RESET, CALCULATE } from './actions';
import * as utils from './utils';

const initialState = {
    displayedNumber: '',
    formula: ''
}

const OperatorMap = {
    '×': '*',
    '÷': '/'
}

const reducer = ( state = initialState, action ) => {

    switch( action.type ) {

        case SET_NUMBER:
            let new_formula = state.formula + action.value;
            let isOperator = action.value === '×' || action.value === '÷' || action.value === '+' || action.value === '-';

            return {
                ...state,
                displayedNumber: isOperator && !state.formula ? 
                    state.displayedNumber : utils.getDisplayNumber( new_formula ),
                formula: isOperator && !state.formula ? 
                    state.displayedNumber + action.value : new_formula
            }

        case CALCULATE:
            let operator = utils.getOperator( state.formula );

            return {
                ...state,
                displayedNumber: ( operator === '×' || operator === '÷' ) ? 
                    utils.calculateResult( utils.convertToVaildFormula( state.formula, OperatorMap[operator] ) ).toString() :
                    utils.calculateResult( state.formula ).toString(),
                    formula: ''
            }
        
            case RESET:
                
                return initialState;

            default:
                return initialState;
    }
}

export default reducer;