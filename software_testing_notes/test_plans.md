# Test Plans

Test plans lay out an entire plan for testing a system under test. They are then executed - that is, a person or automated testing tool goes through the steps listed in the test plan - and the results are compared to what actually happened. That is, we will be checking the expected behavior of a system (what we write down in our test plan) against the observed behavior (what we see the system actually doing)

## The Basic Layout of a Test Plan

A test plan is, at its core, simply a collection of test cases. Test cases are the individual tests that make up a test plan.

Although different tools and companies will have different templates for entering test cases, this is a relatively standard one that can be applied or modified for most software projects:

1. **Identifier** - An identifier such as "Database table drop test" which uniquely identifies the test case.
2. **Test Case** - A description of the test case and what it is testing
3. **Preconditions** - Any preconditions for the state of the system before the test begins. A test often requires that the system be in a certain state before the test itself can be run. The dividing line between preconditions and execution steps can sometimes be an art rather than a science. In general, the more safety critical the domain, the more precise the preconditions will be.
4. **Input Values** - Any values input directly to the test. Whereas preconditions are aspects of the system that are set before the test is run, input values are those values directly in to the functionality under test. As a heuristic, if someone selects or enters a value, as part of the execution of the test case, it should be considered an input value, otherwise it is a precondition.
5. **Execution Steps** - The actual steps of the test, to be executed by the tester. Execution steps are often incredibly specific and it is critical to follow them precisely.
6. **Output Values** - Any values output directly by the test
7. **Postconditions** - Any postconditions of the state of the system which should hold true after the test has been executed.
