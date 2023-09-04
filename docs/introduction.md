# Introduction

**Important notes!** I believe that each design looks sophisticated and complex at first glance, but I tried to keep the solution as simple as possible, while still using the best practices and the most common frameworks and libraries.


## Core framework: React
  The companies I have recently worked with primarily used React because of its flexibility, popularity, simplicity, and power. However for me, React, Angular, and Vue.js do not look too much different.

## Styling framework
 I chose Sass as a flexible, efficient, modular and powerful styling framework. Based on needs it can be implemented more simple or more sophisticated. 

# Reactive and State management framework
 In combination with RxJs, I used [Redux](https://redux.js.org/) as a simple, yet efficient solution, which helps medium and large-scale projects to manage the state. 


 ## Automated Tests
 To cover more parts of the project with less codes, I have used **Cypress** for end-to-end testing with two scenarios as samples. To run the tests, please first start the application, and then run the command: `npm run test:open` or `npm run test:e2e`.

 ## Code quality
 EsLint and SonarQube are used to check the code quality and security. To run the SonarQube, please setup SonarQube service first, then run the command: `npm run sonar`. 