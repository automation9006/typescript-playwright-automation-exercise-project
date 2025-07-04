# Playwright Project using JavaScript


## Clone the repository

```shell
git clone https://github.com/automation9006/javascript-playwright-webuy-anycar-project.git
```

## steps to create a playwright project from scratch
```shell
npm init playwright@latest -- --quiet --browser=chromium --browser=firefox --browser=webkit
``` 
this will create test folders and all the dependencies with playwright config file

## Run the Playwright Test
To execute the tests, open the terminal and type the following commands -

### **Run all the tests**
```shell
npm playwright test
```

### **Run a single test file**
```shell
npx playwright test userSignup.spec.ts
```

### **Run a set of test files**
```shell
npx playwright test tests/dir_1 tests/dir_2
```

### **Run tests in Headed mode**
```shell
npx playwright test --headed
```

### **Run the test in a specific Project (Browser)**
```shell
npx playwright test --project=firefox
```

### **Run the test with the Title**
```shell
npx playwright test -g "Your Test Title"
```

### **Run all the files that have `file1` and `file2` in the file name**
```shell
npx playwright test file1 file2
```

### **Disable Parallel Execution**
```shell
npx playwright test --workers=1
```

## Debug the Playwright Test
To debug the tests, open the terminal and type the following commands -

### **Debug all the tests**
```shell
npx playwright test --debug
```

### **Debug a single test file**
```shell
npx playwright test example.spec.js --debug
```

Happy Testing!!!

---

## run tests headed with specific browser
```shell
npx playwright test ./tests/weBuyAnyCar/homePagevalidations.spec.js --headed --project=chrome

npx playwright test ./tests/weBuyAnyCar/homePagevalidations.spec.js --headed --project=chromium

npx playwright test ./tests/weBuyAnyCar/homePagevalidations.spec.js --headed --project=firefox

npx playwright test ./tests/weBuyAnyCar/homePagevalidations.spec.js --headed --project=msedge

npx playwright test ./tests/weBuyAnyCar/homePagevalidations.spec.js --headed --project=webkit
```
### How to Run Test Suite from command line

## Go to Project root directory and run command will run tests on chrome and generate standard playwright report:

npx playwright test --headed --project=chrome

## If you want to run e2e tests run this command :

npx playwright test --headed --project=chrome -c e2e.config.js

## To generate allure reports please run the below command if you do not see the dev dependencies  "allure-playwright": "^x.x.x"

npm i -D @playwright/test allure-playwright

## Run this command and this will generate allure reports:
 
 allure generate allure-results -o allure-report --clean

 ## Run this command to open the allure reports

allure open allure-report

* the browser will open with allure reports and the html files will be generated under allure-report folder.


 ### How to Update local npm packages
 Go to Project root directory and run command: `npm update`

 ### How to view failed test screenshot
Go to Project root directory: `./test-results/`

### How to view HTML report
Go to Project root directory: `./playwright-report/index.html`