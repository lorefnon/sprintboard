# Sprintboard

A minimal and opinionated web application to manage sprints and tasks

## Features

TBD

## Motivation

A proof-of-concept integration project to experiment with:

- [GraphQL](https://www.graphql-js.org/) API using [Grats](https://grats.capt.dev/)
- [Postgres](https://www.postgresql.org/) integration through [pgtyped](https://pgtyped.dev/)
- [Vue](http://vuejs.org/)+[SFC](https://vuejs.org/guide/scaling-up/sfc.html)+[Composition API](https://vuejs.org/api/sfc-script-setup.html) frontend
- End to end [typescript](https://www.typescriptlang.org/) stack

Running the project: 

- Create a dedicated empty postgres database for sprintboard
- Copy `.env.example` to `.env` and update values
- Install dependencies: `pnpm i`
- Run db migrations: `pnpm run dbmate up`
- Run backend server (node.js): `pnpm run server:dev`
- Run ui server (vite): `pnpm run ui:dev`
- Open `localhost:9898` in browser

