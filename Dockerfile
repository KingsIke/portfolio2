FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN  yarn

RUN npx tsc


COPY next.config.js ./next.config.js


COPY pages ./pages
COPY public ./public
COPY styles ./styles
COPY components  ./components
COPY portfolio-kingsike ./portfolio-kingsike
COPY utils ./utils



CMD ["yarn", "dev"]
