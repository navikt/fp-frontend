#!/bin/sh

# Picking the first nameserver.
export RESOLVER=$(cat /etc/resolv.conf | grep -v '^#' | grep -m 1 nameserver | awk '{print $2}')
echo "Will use resolver:" $RESOLVER

export APP_PORT="${APP_PORT:-443}"
export APP_NAME="${APP_NAME:-devimg}"
export APP_VERSION="${APP_VERSION:-localhost}"

# replace env for nginx conf
envsubst '$DEBUG $APP_DIR $APP_PATH_PREFIX $APP_API_GATEWAY $OIDC_AGENTNAME $OIDC_PASSWORD $OIDC_HOST_URL $RESOLVER $APP_NAME $APP_VERSION $FASIT_ENVIRONMENT_NAME $APP_PORT $APP_CALLBACK_PATH $APP_LOGIN_PATH' < /etc/nginx/conf.d/app.conf.template > /etc/nginx/conf.d/default.conf

# find all env start with APP_
export SUBS=$(echo $(env | cut -d= -f1 | grep "^APP_" | sed -e 's/^/\$/'))

# replace above envs
echo "inject envs: " $SUBS
for f in `find /$APP_DIR -regex ".*\.\(js\|css\|html\|json\|map\)"`; do envsubst "$SUBS" < $f > $f.tmp; mv $f.tmp $f; done

/usr/local/openresty/bin/openresty -g 'daemon off;'
exec "$@"
