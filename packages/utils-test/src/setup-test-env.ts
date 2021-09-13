import 'raf/polyfill';
import '@testing-library/jest-dom';
import { configure as configureEnzyme } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { switchOnTestMode } from '@fpsak-frontend/rest-api';

configureEnzyme({ adapter: new Adapter() });

switchOnTestMode();
