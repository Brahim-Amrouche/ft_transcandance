FROM alpine:3.21

RUN apk update && apk upgrade \
	&& apk add nginx openssl

WORKDIR /etc/nginx/ssl/

# COPY ./cert/ /etc/nginx/ssl/
COPY ./clashers.conf ../http.d/
COPY --chmod=755 ./start_script.sh ../start_script.sh

CMD ["../start_script.sh"]
