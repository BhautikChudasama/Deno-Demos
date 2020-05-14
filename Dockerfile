FROM bhautikchudasama/deno:1.0

EXPOSE 8080

WORKDIR /app

COPY . .

RUN deno cache server.ts

CMD deno run --allow-net=:8080 server.ts
