import 'raf/polyfill';
import '@testing-library/jest-dom';
import { configure as configureEnzyme } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configureEnzyme({ adapter: new Adapter() });

// TODO Testane bør ikkje vera så treige!
jest.setTimeout(15000);

// Skjul warning fra echarts
const originalWarn = console.warn.bind(console.warn);
beforeAll(() => {
  console.warn = (msg) => !msg.toString().includes('Can\'t get DOM width or height.') && originalWarn(msg);
});
afterAll(() => {
  console.warn = originalWarn;
});

