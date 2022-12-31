# Nest Boilerplate

🔥 Nest boilerplate to create projects as fast as possible 🔥


## Features

- [x] [Nestjs performance Fastify](https://docs.nestjs.com/techniques/performance)
- [x] [Swagger](https://swagger.io/)
- [x] [Typeorm](https://typeorm.io/)
- [x] [Docker compose](https://docs.docker.com/engine/reference/commandline/compose/)
- [x] [Eslint](https://eslint.org/)
- [x] [Prettier](https://prettier.io/)
- [x] [Docker](https://www.docker.com/)
- [ ] [Jest](https://jestjs.io/)

## Code standards

- The modules are plural **(module-name.module.ts)**
- The controllers are plural and his path too **(controller-name.controller.ts)**
- The services are plural **(service-name.service.ts)**
- The entities are singular **(entity-name.entity.ts)**

## Actual Folder structure

```
├── dist/
├── docker-compose.yml
├── Dockerfile
├── nest-cli.json
├── package.json
├── package-lock.json
├── README.md
├── src/
│   ├── app.module.ts
│   ├── main.ts
│   └── modules/
│       ├── <module-name>/
│       │   ├── <module-name>.module.ts
│       │   ├── dtos/
│       │   ├── entities/
│       │   ├── services/
│       │   └── interfaces/
│       ├── authentication/
│       │   ├── authentication.controller.ts
│       │   ├── authentication.module.ts
│       │   ├── constants/
│       │   ├── decorators/
│       │   ├── dtos/
│       │   ├── encrypt/
│       │   ├── guards/
│       │   ├── services/
│       │   └── strategies/
│       └── note
│           ├── dtos/
│           ├── interfaces/
│           ├── note.controller.ts
│           ├── note.entity.ts
│           ├── note.module.ts
│           └── note.service.ts
├── test/
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
└── tsconfig.json
```

## Module structure

```
├── <module-name>/
│   ├── <module-name>.module.ts
│   ├── dtos/
│   ├── entities/
│   ├── services/
│   └── interfaces/
```

## Contributors

- Author - Cristian Sotomayor [@csdev](https://github.com/csdev19)

## Extra

If youy want to use snake-case go to this [package](https://www.npmjs.com/package/typeorm-naming-strategies)


### Docker

There is a `docker-compose.yml` file for starting Docker.

`docker-compose up`

After running the sample, you can stop the Docker container with

`docker-compose down`

```
docker-compose up -d postgres
docker-compose ps
docker-compose down
```

[docker investigation ](https://blog.logrocket.com/docker-volumes-vs-bind-mounts/)


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
