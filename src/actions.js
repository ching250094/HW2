export const SET_NUMBER = 'SET_NUMBER';
export const RESET = 'RESET';
export const CALCULATE = 'CALCULATE';

export function doSetCalculation( value ) {
    return {
        type: SET_NUMBER,
        value
    }
}

export function doReset() {
    return {
        type: RESET
    }
}

export function doCalculate() {
    return {
        type: CALCULATE
    }
}