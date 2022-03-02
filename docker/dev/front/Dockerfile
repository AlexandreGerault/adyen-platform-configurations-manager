FROM node:alpine

WORKDIR /usr/src/apps/front

RUN yarn --frozen-lockfile

EXPOSE 3000

CMD ["yarn", "run", "dev", "--host"]