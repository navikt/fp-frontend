import 'raf/polyfill';
import '@testing-library/jest-dom';
import { configure as configureEnzyme } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configureEnzyme({ adapter: new Adapter() });

// TODO Testane bør ikkje vera så treige!
jest.setTimeout(15000);

// Skjul warning fra echarts
// eslint-disable-next-line no-console
const originalWarn = console.warn.bind(console.warn);
beforeAll(() => {
  // eslint-disable-next-line no-console
  console.warn = (msg) => !msg.toString().includes('Can\'t get DOM width or height.') && originalWarn(msg);
});
afterAll(() => {
  // eslint-disable-next-line no-console
  console.warn = originalWarn;
});
