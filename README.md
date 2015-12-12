# Toy Robot

## System Requirements
* NodeJS 4.2.3 LTS
* Tested under Mac OSX 10.11.1 (El Capitan) and Fedora 23

## Installing NodeJS

### Windows and Mac users
* Go to https://nodejs.org/en/download then download and install appropriate version (both in Windows and Mac is a one file installer).

### Linux Users
* Download sources from https://nodejs.org/en/download and run following command to install it:
```sh
$ ./configure && make && make install
```

### Test NodeJS was correctly installed

* Test that NodeJS was correctly installed in your system executing following
  command (it must print v4.2.3):
```sh
$ node -v
```  

## Installing Toy Robot application


* On application root path, run following command to download application dependencies
```sh
$ npm install
```

## Starting application

* On application root path, run following command to execute a file with commands
```sh
$ npm start <FILE_PATH>
```
(by default will execute input.txt file)


## Executing application unit tests

* On application root path, run following command to run tests
```sh
$ npm test
```

## Checking application code coverage

* On application root path, run following command to generate code coverage site
```sh
$ npm run coverage
```

## Running provided examples and additional data sets

* To run Example A (described in PROBLEM.md), execute:
```sh
$ npm run example_a
```

* To run Example B (described in PROBLEM.md), execute:
```sh
$ npm run example_b
```

* To run Example C (described in PROBLEM.md), execute:
```sh
$ npm run example_c
```

* To run additional set A, execute:
```sh
$ npm run additional_a
```

* To run additional set B, execute:
```sh
$ npm run additional_b
```
