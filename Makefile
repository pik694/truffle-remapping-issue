truffle:
	truffle compile

solc:
	solc --allow-paths . -o solc_build --standard-json < solc-config.json


