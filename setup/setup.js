const sinon = require('sinon');

sinon.stub(console, 'error')
  .callsFake((warning) => {
    // TODO Fjern if/else
    if (warning && warning.indexOf
      && (warning.indexOf('Not implemented: navigation (except hash changes)')
        > -1)) {
      console.warn(warning); // NOSONAR Kun testkode
    } else if (warning) {
      throw new Error(warning);
    }
  });
