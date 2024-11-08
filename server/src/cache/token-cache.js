import NodeCache from 'node-cache';

let _tokenCache;

_tokenCache = _tokenCache || new NodeCache();

export default _tokenCache;
