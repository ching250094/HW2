import * as utils from './utils';

test( 'get operator to eqaul +', () => {
    expect( utils.getOperator( "1+1" ) ).toBe("+");
} );

