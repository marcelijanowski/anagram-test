# Anagram API
## [Heroku working API](https://anagram-moj-test.herokuapp.com/crepitus)
Project is an api which based on pass world will give back anagram from text dictonary:
Project is using 
- Node/Express/Typescript
- Jest for unit test
- Supertest for e2e test
- Helmet (Help secure Express apps with various HTTP headers)
- Heroku 



## Prerequest

1. [Install yarn and node on you local machine](#install-yarn-and-node-on-you-local-machine)

### Install yarn and node on you local machine
#### MacOS

You can install Yarn through the Homebrew package manager. This will also install Node.js if it is not already installed.
```
brew install yarn
```
#### MacPorts

You can install Yarn through MacPorts. This will also install Node.js if it is not already installed.
```
sudo port install yarn
```
For other system installation follow instruction on [Yarn official page](https://yarnpkg.com/en/docs/install#windows-stable)

## Available enviroments

* Test url (build per PRs) [Dev link](https://anagram-moj-test.herokuapp.com/crepitus)

## Getting started 

Clone the repo and install Node dependencies
```
git clone git@github.com:marcelijanowski/anagram-test.git
yarn install
```

### Running project though docker
To run project on local machine run command:

```
docker-compose up
```

### Running project locally
To run project on local machine run command:
```
yarn dev
```

## Project Structure

```
├── dist                        # production build output
└── src                         # app source code
    └── index.ts                # app entry module with routing config

```

# Running e2e test

Test are written using supertest. Before running test check is service is already running on port and then

* Run `yarn e2e`

# Running linting

To test is written code is following standard we use tslint and rules are in `tslint.json` file
To run linter :

* Run `yarn lint`
