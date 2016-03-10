#nodezoo-metrics
FROM node:4

RUN mkdir /src

ADD package.json /src/

WORKDIR /src

RUN npm install

COPY . /src

CMD ["node", "-r", "toolbag", "srv/metrics-dev.js", "--seneca.options.tag=nodezoo-metrics", "--seneca-log=type:act"]
