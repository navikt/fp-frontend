// @ts-ignore
window.app2Url = () => (process.env.NODE_ENV === 'development' ? 'http://localhost:9005' : 'test');

// Use dynamic import here to allow webpack to interface with module federation code
import('./bootstrap');
