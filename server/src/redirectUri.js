import config from './config.js';
import logger from './log.js';

const applicationBaseUrl = config.server.host;
const loginRedirectStopped = `${applicationBaseUrl}?error=redirect_uri_rejected`;

const handleRedirectUri = (redirectUri) => {
    if (!redirectUri) {
        return applicationBaseUrl;
    } else if (redirectUri && redirectUri.startsWith(applicationBaseUrl)) {
        return redirectUri;
    } else {
        logger.warning(`Ikke white listed redirect_uri '${redirectUri}'. Redirecter til '${loginRedirectStopped}'`);
        return loginRedirectStopped;
    }
};

export const getRedirectUriFromQuery = ({ request }) => handleRedirectUri(request.query.redirect_uri);
export const getRedirectUriFromHeader = ({ request }) => handleRedirectUri(request.headers.referer);
export const setRedirectUriOnSession = ({ request, redirectUri }) => {
    request.session.redirect_uri = handleRedirectUri(redirectUri);
};
export const getRedirectUriFromSession = ({ request }) => handleRedirectUri(request.session.redirect_uri);
