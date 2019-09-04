// import reducer from './reducer';
// import * as types from './actions';

// describe( 'todos reducer', () => {
//     it( 'should handle SET_NUMBER', () => {
//         expect( 
//             reducer([], {
//                 type: types.SET_NUMBER,
//                 value: '4'
//             })
//         ).toEqual([
//             {
//                 value: '4'
//             }
//         ])
//     })
// })

import * as utils from './utils';

test( 'get operator to eqaul +', () => {
    expect( utils.getOperator( "1+1" ) ).toBe("+");
} );

