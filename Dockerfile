FROM ianwalter/pnpm

LABEL org.opencontainers.image.authors="https://github.com/xianyue0224"

ADD . /app

WORKDIR /app

RUN cd /app

RUN pnpm install
RUN pnpm docs:build

CMD pnpm docs:preview

EXPOSE 4173