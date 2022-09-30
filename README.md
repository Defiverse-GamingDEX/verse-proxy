# Verse-layer-proxy
This is verse-layer's proxy to control access allow list.<br>
Verse-layer-proxy is made by [Nest](https://github.com/nestjs/nest).

## Set up transaction allow list
You can set allow list at src/config/transactionAllowList.ts.

### from, to
You can controls the from and to of a transaction.

```typescript
// elements contained in the array are allowed to be transacted.
this.list = [
  {
    fromList: ['0xaf395754eB6F542742784cE7702940C60465A46a'],
    toList: ['0xaf395754eB6F542742784cE7702940C60465A46a'],
  },
  {
    fromList: ['0xaf395754eB6F542742784cE7702940C60465A46c'],
    toList: ['0xaf395754eB6F542742784cE7702940C60465A46c'],
  },
];

// '*' is wildcard.
this.list = [
  {
    fromList: ['*'],
    toList: ['*'],
  },
];

// ! is denial.
// 0xaf395754eB6F542742784cE7702940C60465A46a are not allowed to be transacted.
this.list = [
  {
    fromList: ['!0xaf395754eB6F542742784cE7702940C60465A46a'],
    toList: ['!0xaf395754eB6F542742784cE7702940C60465A46a'],
  },
];
```

### Value
You can controls the token value of a transaction.

```typescript
// Only transactions with more than 10000000000000000000000000000unit values are allowed.
this.list = [
  {
    fromList: ['*'],
    toList: ['*'],
    value: { gt: 1000000000000000000 },
  }
];
```

| value's key  |  Comparison Operation  |
| ---- | ---- |
|  eq  |  txValue == condition is allowed  |
|  neq  |  txValue != condition is allowed  |
|  gt  |  txValue > condition is allowed  |
|  gte  |  txValue >= condition is allowed  |
|  lt  |  txValue < condition is allowed  |
|  lte  |  txValue <= condition is allowed  |

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

## Deploy
```bash
# create image
docker build . --tag verse-layer-proxy
# create container
docker run --name verse-layer-proxy -d -p 3000:3000 verse-layer-proxy
```