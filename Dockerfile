FROM nginxinc/nginx-unprivileged
# FPSAK spesifikk
ENV APP_DIR="/app" \
	APP_PATH_PREFIX="/fpsak" \
	APP_CALLBACK_PATH="/fpsak/cb" \
	APP_URL_FPTILBAKE="http://fptilbake" \
	APP_URL_FPOPPDRAG="http://fpoppdrag" \
	APP_URL_FPSAK="http://fpsak"
#FPSAK spesifkk
COPY dist /app/fpsak/
COPY .deploy/proxy.nginx /nginx/proxy.nginx

EXPOSE 9000 443
