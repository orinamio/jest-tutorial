## Installation
First, create a folder and then create `package.json` file using:
```
cd folder-name
npm init 
```

Then, Install the Jest dependency. For NPM:
```
npm install --save-dev jest 
```
For Yarn:
```
yarn add --dev jest
```
To Run Test:
```
npm test
```
Result:

![](https://cdn.scotch.io/32265/Ku6hGDd7TnqA1ZaYLnhV_Screen%20Shot%202017-07-07%20at%202.56.47%20PM.png)

To view `built-in code coverage report`, Install Jest globally. Run:
```
npm install -g jest
```
Then: 
```
jest --coverage
```
Result:

![](https://cdn.scotch.io/32265/0wyFYBftR2aNSLNXjNEq_Screen%20Shot%202017-07-07%20at%205.46.25%20PM.png)
