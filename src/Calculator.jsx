'use strict'

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './assets/styles/calculator.scss';

const NumberButton = ({
    value,
    onClick
}) => (
    <div className={`keys ${value === '0' ? 'zero' : ''}`}
        onClick={ onClick }
        key={ value }
    >
        { value }
    </div>
);

const FunctionButton = ({ 
    value, 
    onClick
}) => (
    <div className="keys functions"
         onClick={ onClick }
         key={ value }
    >    
        { value}
    </div>
);

const ResetButton = ({
    onClick
}) => (
    <div className="keys functions"
         onClick={ onClick } 
    >
        AC
    </div>
)

const EqualsButton = ({
    onClick
}) => (
    <div className = "keys functions equals"
         onClick = { onClick }
         >
        =
    </div>
)


class Calculator extends Component {

    state = {
        currentValue: ''
    }

    handleClickNumber = ( value ) => {
        this.setState( prevState => ({
            currentValue: (prevState.currentValue) + value + ''
        }));
    }

    handleClickOperator = ( operator ) => {
        if ( this.state.currentValue ) {
            this.props.doSetNumber( operator, this.state.currentValue );

            this.setState({ currentValue : '' })
        }
    }

    handleClickEquals = () => {
        this.props.doCalculate(this.state.currentValue);
    }

    render() {
        console.log(this.props.data)
        return (
            <div className="wrapper">

                <div className="display">
                    { !this.state.currentValue.length && !this.props.data.storedNumber ?
                        '0' : this.state.currentValue || this.props.data.storedNumber }
                </div>

                <div className="number_pad">
                    <ResetButton onClick = { () => this.props.doReset() } />
                    <FunctionButton value='+/-' onClick={null} />
                    <FunctionButton value='%' onClick={null} />
                    <FunctionButton value='÷' oonClick={null} />
                    <NumberButton value='7' onClick={ () => this.handleClickNumber('7') } />
                    <NumberButton value='8' onClick={ () => this.handleClickNumber('8') } />
                    <NumberButton value='9' onClick={ () => this.handleClickNumber('9') } />
                    <FunctionButton value='×' onClick={ () => this. handleClickOperator('×') } />
                    <NumberButton value='4' onClick={ () => this.handleClickNumber('4') } />
                    <NumberButton value='5' onClick={ () => this.handleClickNumber('5') } />
                    <NumberButton value='6' onClick={ () => this.handleClickNumber('6') } />
                    <FunctionButton value='-' onClick={ () => this. handleClickOperator('-') } />
                    <NumberButton value='1' onClick={ () => this.handleClickNumber('1') } />
                    <NumberButton value='2' onClick={ () => this.handleClickNumber('2') } />
                    <NumberButton value='3' onClick={ () => this.handleClickNumber('3') } />
                    <FunctionButton value='+' onClick={ () => this. handleClickOperator('+') } />
                    <NumberButton value='0' onClick={ () => this.handleClickNumber('0') } />
                    <NumberButton value='.' onClick={null} />
                    <EqualsButton value='=' onClick={ () => this.handleClickEquals() } />
                </div>
            </div>
        )
    }
}

 
const mapStateToProps = data => ({
    data
  });
  
  const mapDispatchToProps = dispatch => ({
    doCalculate: (value) => {
  
      dispatch({ 
        type: 'EQUALS',
        value
      })
    },
  
    doReset: () => {
  
      dispatch({
        type: 'RESET'
      })
    },

    doSetNumber: ( operator, value ) => {
        
        dispatch({
            type: 'SET_NUMBER',
            value,
            operator
        })
    }
  });
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Calculator);