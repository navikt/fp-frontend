import 'raf/polyfill';
import '@testing-library/jest-dom';
import { configure as configureEnzyme } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configureEnzyme({ adapter: new Adapter() });

// TODO Testane bør ikkje vera så treige!
jest.setTimeout(15000);
