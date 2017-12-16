# PhoneValidator

[![Build Status](https://travis-ci.com/BernardoMG/PhoneValidator.svg?token=zJz33RY7FtoBwrYp4yBw&branch=develop)](https://travis-ci.com/BernardoMG/PhoneValidator)


## How to run

### Install dependencies

```
npm install
```

### Run tests

```
npm test
```

### Run program

```
node index.js input.txt
```

###### Note: The `input.txt` file needs to be at the same directory of the `index.js` file.


## Improvement for the future

Let's imagine that in the future this program needs to validate millions of possible phone numbers with the best possible performance. The presented solution processes one possible phone number at a time. Consequently, this will affect its performance.

To overcome such requirement, we would have to adapt this solution considering the Producer-Consumer paradigm. In this new solution, `Producer(s)` are responsable for generate data, put it into the buffer/queue and start again. While, the `Consumer(s)` is consuming the data (i.e, possible phone numbers), one piece at a time.

With this new solution, this program could process millions of possible phone numbers with increased performance.

###### Note: ![ Redis Simple Message Queue](https://github.com/smrchy/rsmq) and ![Worker](https://github.com/mpneuried/rsmq-worker)
