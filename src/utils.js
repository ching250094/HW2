export const getOperator = formula => {
    return formula.replace(/[0-9]/g, '');
}

export const convertToVaildFormula = ( formula, newValue ) => {
    console.log(formula, newValue)
    return formula.replace( getOperator(formula), newValue ) 
}

export const getDisplayNumber = formula => {
    let operator = getOperator( formula );

    if ( operator ) {
        return formula.split( operator )[1]
    } else {
        return formula
    }
}

export const calculateResult = fn => {

    let Fn = Function; 

    return new Fn( 'return ' + fn )();
}
