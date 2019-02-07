const { expect } = require('chai');
const createChain = require('../../src/Storage/createChain');

describe('Storage - createChain', () => {
  it('should create a chain', () => {
    const self = {
      store: { chains: {} },
    };
    const testnet = 'testnet';

    createChain.call(self, testnet);

    const expected = { store: { chains: { testnet: { name: 'testnet', blockheight: -1 } } } };
    expect(self).to.be.deep.equal(expected);
  });
});
