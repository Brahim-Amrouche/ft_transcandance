FROM alpine:latest

RUN apk update &&\
    apk add python3 py3-virtualenv py3-pip libpq-dev

WORKDIR /usr

ARG PG_USERNAME\
    PG_USER_PASSWORD\
    PG_DB_NAME \
    JWT_SECRET \
    JWT_PUBLIC

ENV PG_USERNAME=${PG_USERNAME} \
    PG_USER_PASSWORD=${PG_USER_PASSWORD} \
    PG_DB_NAME=${PG_DB_NAME} \
    JWT_SECRET=${JWT_SECRET} \
    JWT_PUBLIC=${JWT_PUBLIC}

COPY ./backend/requirements.txt ./requirements.txt
COPY --chmod=777 ./containers/django/script.sh /usr/script.sh

RUN python3 -m venv venv && \
    source venv/bin/activate && \
    pip install -r ./requirements.txt

EXPOSE 8000

CMD ./script.sh