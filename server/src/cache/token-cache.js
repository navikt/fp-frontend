import NodeCache from 'node-cache';

// eslint-disable-next-line no-underscore-dangle,import/no-mutable-exports
let _tokenCache;

// eslint-disable-next-line prefer-const
_tokenCache = _tokenCache || new NodeCache();

export default _tokenCache;
