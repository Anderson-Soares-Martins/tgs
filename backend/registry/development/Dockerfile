FROM node:14.17.5-alpine3.14

WORKDIR /opt/app-root/src

RUN npm install -g knex
RUN apk add --no-cache bash dumb-init
RUN chown node:node -R /opt/app-root/src
USER node

CMD [ "dumb-init", "node" ]