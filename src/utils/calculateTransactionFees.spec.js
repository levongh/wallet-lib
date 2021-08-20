const { expect } = require('chai');
const calculateTransactionFees = require('./calculateTransactionFees');

describe('Utils - calculateTransactionFees', function suite() {
  it('should correctly calculate transaction fees', function () {
    const transaction = null
    const fees = calculateTransactionFees(transaction);
    expect(fees).to.equal(0);
  });

});
