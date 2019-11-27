# Unit Testing

Unit testing is a level of software testing where individual units/components of a software are tested. The purpose is to validate that each unit of the software performs as designed. A unit is the smallest testable part of any software. It usually has one or a few inputs and usually a single output. In procedural programming, a unit may be an individual program, function, procedure etc. In object-oriented programming, the smallest unit is a method, which may belong to a base/super class, abstract class or derived/child class. Unit testing frameworks, drivers, stubs and mock/fake objects are used to assist in unit testing.

Unit Testing is the first level of software testing and is performed prior to Integration Testing.

## Unit Testing Tasks

- Unit Test Plan
  - Prepare
  - Review
  - Rework
  - Baseline
- Unit Test Cases/Scripts
  - Prepare
  - Review
  - Rework
  - Baseline
- Unit Test
  - Perform

## Unit Testing Benefits

- Unit testing increases confidence in changing/maintaining code. If good unit tests are written and if they are run every time any code is changed, we will be able to promptly catch any defects introduced due to the change.
- Development is faster since testing can automated.
- The cost of fixing a defect detected during unit testing is lesser in comparison to that of defects detected at higher levels.
- Debugging is easy. When a test fails, only the latest changes need to be debugged.
- Makes code more reliable.

## Unit Testing Tips

- Find a tool/framework for your language
- Do not create test cases for everything. Instead, focus on the tests that impact the behavior of the system
- Isolate the development environment from the test environment
- Use test data that is close to that of production
- Before fixing a defect, write a test that exposes the defect
- Write test cases that are independent of each other. For example, if a class depends on a database, do not write a case that interacts with the database to tests the class. Instead, create an abstract interface around the database connection and implement that interface with a mock object
- Aim at covering all paths through the unit. Pay particular attention to loop conditions
- Make sure you are using a version control system to keep track of your test scripts
- In addition to writing cases to verify the behavior, write cases to ensure the performance of the code
- Perform unit tests continuously and frequently.
