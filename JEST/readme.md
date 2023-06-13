# JEST Testing
Jest is a popular test framework for JavaScript. It claims to provide “delightful JavaScript testing” 

## Some of the advantages/features of Jest are given below:

- Zero configuration required.
- Fast: Jest tests run in parallel – this in turn greatly reduces the test execution time.
- Built-in code coverage: Jest supports code coverage out of the box – this is a very useful metric for all CI-based delivery pipelines and overall test effectiveness of a project.
- Isolated and sandboxed tests: Each Jest test runs in its own sandbox, which ensures no two tests can interfere or impact each other.
- Powerful Mocking support: Jest tests support all types of mocking – be it functional mocking, timer mocking, or mocking individual API calls.
- Support snapshot testing: Snapshot testing is relevant from the React perspective. Jest supports capturing a snapshot of the react component being tested – this can validate with the component’s actual output. This greatly helps in validating the component’s behavior.

## JEST Installation
```code
npm install -g jest
```
OR
```code
npm install --save-dev jest
```
## Create a Sample Project
In your current work directory run the following command to create a project
```code
 npm init -y
 ```
 this should create a package.json file

## Configure the scripts
configure the npm test script to run the Jest tests i.e. when the command ‘npm test’ is executed, the script should run all the Jest framework based tests.
```code
 "scripts": {
    "test": "jest"
  }
  ```
  ## Writing Tests For A Javascript Function

- In the node project created in the above section, create a js file named calculator.js

- create a test file in the same folder for these tests, named calculator.test.js 

- write a test for adding 2 numbers

## Please refer to the below points w.r.t the test above:

- The describe block is an outer description for the test suite i.e it represents a generic container for all the tests that we are going to write for the calculator in this file.

- Next, we have an individual test block – this represents a single test. The string in quotes represents the name of the test.

- Refer to the code in the expect block – “expect” is nothing but an assertion. The statement is calling the sum method in the function under test with inputs 1 & 2 and expecting the output to be 3.

## Run the test in the terminal 
- run the test by using the following command 
```code 
npm test
```

## Jest Matchers
Jest assertions use matchers to assert on a condition. Jest uses matchers from the expect Api

 ### Equality
 These are the most commonly used matchers. They are used for checking equality or inequality and is mostly used for arithmetic operations.
 ```javascript
 test("equality matchers", () => {
   expect(2*2).toBe(4);
   expect(4-2).not.toBe(1);
   ```

### Truthiness
Here we will see, matchers for null, falsy, and truthy i.e. false and truth values. It’s important to note that anything that’s not logically true is falsy.
```javascript
test("truthy operators", () => {
   var name="Software testing help"
   var n = null
   expect(n).toBeNull()
   expect(name).not.toBeNull
 
   // name has a valid value
   expect(name).toBeTruthy()
 
   //fail - as null is non success
   expect(n).toBeTruthy()
   
   // pass - null treated as false or negative
   expect(n).toBeFalsy()
 
   // 0 - treated as false
   expect(0).toBeFalsy()
 })
 ```
### Number Matchers
These matchers could be used for general arithmetic operations.
For example, greaterThan, lessThan, greaterThanOrEqual, etc.
```javascript
test("numeric operators", () => {
 
   var num1 = 100;
   var num2 = -20;
   var num3 = 0;
 
   // greater than
   expect(num1).toBeGreaterThan(10)
 
   // less than or equal
   expect(num2).toBeLessThanOrEqual(0)
 
   // greater than or equal
   expect(num3).toBeGreaterThanOrEqual(0)
 })
 ```
 ### String Matchers
 A lot of times we need strings to match a regular expression as an assertion in a Unit test. Jest provides matchers for strings to be matched against a regular expression.
 ```javascript
test("string matchers",() => {
   var string1 = "software testing help - a great resource for testers"
 
   // test for success match
   expect(string1).toMatch(/test/);
 
   // test for failure match
   expect(string1).not.toMatch(/abc/)
 })
 ```
 ## Jest Hooks – Setup And Teardown
 Just like all other xUnit based unit test frameworks, Jest framework also provides hooks for setup and cleanup methods. These hook methods are executed before and after each test in the test suite or before and after the testSuite execution.

### Totally there are 4 hooks that are available to use.

- beforeEach and afterEach: These hooks are executed before and after each test in the test suite.
- beforeAll and afterAll: These hooks are executed just once for each test suite. i.e. if a test suite has 10 tests, then these hooks will just be executed once for every test execution.

<b>We will set the inputs in beforeEach hook for illustration. The test file would look with test hooks as shown below.</b>

```javascript
describe("Calculator tests", () => {
  var input1 = 0
 var input2 = 0
 
 beforeAll(() => {
   console.log("beforeAll called");
 });
 
 afterAll(() => {
   console.log("afterAll called");
 });
  beforeEach(() => {
   console.log("beforeEach called");
   input1 = 1;
   input2 = 2;
 });
  afterEach(() => {
   console.log("afterEach called");
 });
 
 test('adding 1 + 2 should return 3', () => {
   // arrange and act
   var result = mathOperations.sum(input1,input2)
 
   // assert
   expect(result).toBe(3);
 });
 ```
 
