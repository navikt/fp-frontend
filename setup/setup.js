const sinon = require('sinon');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const exposedProperties = ['window', 'document'];

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

const dom = new JSDOM('<html><body></body></html><div id="app" />', {
  url: 'http://localhost/fpsak',
});

global.document = dom.window.document;
global.window = document.window;
global.DOMParser = dom.window.DOMParser;
Object.keys(document.defaultView)
  .forEach((property) => {
    if (typeof global[property] === 'undefined') {
      exposedProperties.push(property);
      global[property] = document.defaultView[property];
    }
  });

global.HTMLElement = dom.window.HTMLElement;
global.Date = Date;
