import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './assets/styles/calculator.scss';
import * as actions from './actions';

const Button = React.memo( ({
    value,
    doSetCalculation,
    doReset,
    doCalculate,
    state
}) => {
    const onClick = ( val ) => {
        switch( val ) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '+':
            case '-':
            case '÷':
            case '×':
                doSetCalculation( val );
                break;
            case '=':
                doCalculate();
                break;
            case 'AC':
                doReset();
        }
    }
    return (
        <div className={`keys ${value === '0' ? 'zero' : ''}
            ${value === '=' ? 'equals' : ''}` }
            onClick={ () => onClick( value )}
            key={ value }
        >
            { value }
        </div>
    )
}, ( prev, next ) => {
    return prev.value === next.value
})

const mapDispatchToProps = dispatch => {
    return {
        doSetCalculation: ( val ) => dispatch( actions.doSetCalculation( val ) ),
        doReset: () => dispatch( actions.doReset() ),
        doCalculate: () => dispatch( actions.doCalculate() )
    }
}

const ButtonContainer = connect(
    state => ({ state }),
    mapDispatchToProps
)(Button)


const Display = ({
    displayedNumber,
    formula
}) => {
    const [ state, setState ] = useState('0');

    useEffect(() => {
        if ( displayedNumber.length ) {
            setState( displayedNumber );

        } else if ( !displayedNumber && !formula ) {
            setState('0');
        }
    })
    return (
        <div className="display">
            { state }
        </div>
    )
}

const DisplayContainer = connect(
    state => ({
        displayedNumber: state.displayedNumber,
        formula: state.formula
    })
)(Display)


function Calculator() {
    return (
        <div className="wrapper">
            <DisplayContainer />
            <div className="number_pad">
                <ButtonContainer value='AC' />
                <ButtonContainer value='+/-' />
                <ButtonContainer value='%' />
                <ButtonContainer value='÷' />
                <ButtonContainer value='7' />
                <ButtonContainer value='8' />
                <ButtonContainer value='9' />
                <ButtonContainer value='×' />
                <ButtonContainer value='4' />
                <ButtonContainer value='5' />
                <ButtonContainer value='6' />
                <ButtonContainer value='-' />
                <ButtonContainer value='1' />
                <ButtonContainer value='2' />
                <ButtonContainer value='3' />
                <ButtonContainer value='+' />
                <ButtonContainer value='0' />
                <ButtonContainer value='.' />
                <ButtonContainer value='=' />
            </div>
        </div>
    )
}

export default Calculator;