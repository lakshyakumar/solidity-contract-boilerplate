# Solidity contract testing and deployment boilerplate

this is a solidity contract testing and deployment boilerplate, it uses Infura API to deploy the smart contract on rinkeby test network.

## Installation

Use the package manager npm to install the package dependencies. The ```.env``` file should be populated with the ethereum seed phrase and infura API url.

```bash
npm install
```

## Usage

```bash
# Local deployment and testing
npm test

# deploy on rinkeby test network using infura url
npm run deploy
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
