FROM node:18.13.0-alpine AS node-build
WORKDIR /usr/src/app
COPY package.json ./package.json
COPY src ./src
COPY public ./public
COPY index.html ./index.html
COPY vite.config.js ./vite.config.js
RUN yarn install
# RUN yarn build 


FROM node:18.13.0-alpine as development
WORKDIR /usr/src/app
ENV NODE_ENV development
COPY --from=node-build /usr/src/app/package.json ./package.json
COPY --from=node-build /usr/src/app/vite.config.js ./vite.config.js
COPY --from=node-build /usr/src/app/node_modules ./node_modules
CMD [ "yarn", "dev", "--host"]

