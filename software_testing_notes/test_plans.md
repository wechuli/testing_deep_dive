# Test Plans

Test plans lay out an entire plan for testing a system under test. They are then executed - that is, a person or automated testing tool goes through the steps listed in the test plan - and the results are compared to what actually happened. That is, we will be checking the expected behavior of a system (what we write down in our test plan) against the observed behavior (what we see the system actually doing)

## The Basic Layout of a Test Plan

A test plan is, at its core, simply a collection of test cases. Test cases are the individual tests that make up a test plan.

Although different tools and companies will have different templates for entering test cases, this is a relatively standard one that can be applied or modified for most software projects:

1. **Identifier** - An identifier such as "Database table drop test" which uniquely identifies the test case.
2. **Test Case** - A description of the test case and what it is testing
3. **Preconditions** - Any preconditions for the state of the system before the test begins. A test often requires that the system be in a certain state before the test itself can be run. The dividing line between preconditions and execution steps can sometimes be an art rather than a science. In general, the more safety critical the domain, the more precise the preconditions will be.
4. **Input Values** - Any values input directly to the test. Whereas preconditions are aspects of the system that are set before the test is run, input values are those values directly in to the functionality under test. As a heuristic, if someone selects or enters a value, as part of the execution of the test case, it should be considered an input value, otherwise it is a precondition.
5. **Execution Steps** - The actual steps of the test, to be executed by the tester. Execution steps are often incredibly specific and it is critical to follow them precisely. Contrast this to preconditions where it is sufficient to achieve an end result by any means.
6. **Output Values** - Any values output directly by the test. Values that are returned directly from the functionality being tested are output values.
7. **Postconditions** - Any postconditions of the state of the system which should hold true after the test has been executed. Postconditions may not directly impacted by the functionality, but may be directly caused by the functionality under test.

## Expected Behavior versus Observed Behavior

The principal idea to keep in mind when writing a test case is:

        When the system is in state X, And the following actions Y are performed, I expect Z to happen

That value Z is the crux of the test - it is the expected behavior. It is impossible to test for something if you don't know what you expect to happen. When writing a test case, you need to know where you eventually want the test case to go, otherwise there’s no way to check that you got to where the system should be.

## Developing a Test Plan

Before starting to write any test plan, one must think about the end goal. How detailed does the test plan need to be ? What kind of edge cases should be checked ? What are the potential risks of unknown defects?

The simplest - and often the best- way to develop a detailed test plan is to read the requirements and determine ways to test each of them individually. There is usually quite a bit of thought put into requirements development and since the goal of the system is to meet the requirements, it makes sense to ensure that all of the requirements are in fact tested. It also provides a very straightforward path to generate a test plan.

For each requirement, you should think of at least the "happy path" for that requirement and at least one test case for that path. That is, what is a situation under normal operating parameters that will show this requirement to be met ?

You will also want to think of cases that test the various boundaries as well as all the equivalence classes. How many of these edge cases and corner cases you'd like to add, as well as how extensively you test interior and boundary values will vary depending on the amount of time and resources that you have available for testing, the software domain, and the level of risk that your organization is comfortable taking.

Developing test cases for non-functional requirements (quality attributes) of the system can often be difficult. You should try to ensure that the requirements themselves are testable and think of ways to quantify any test cases that you can think of for those requirements.

Unfortunately, simply having a correspondence between all requirements and a test case for each does not always mean that you have developed a good test plan. You may have to add additional tests to ensure that requirements work together in tandem, or check for cases from the user’s point of view that may not map directly to requirements or flow directly from them. Even more importantly, you will need to gain an understanding of the context that the software exists in. Having domain knowledge of the field can help you understand basic use cases, how the system interacts with the environment, possible failure modes, and how users would expect the system to recover from those failure modes. If nobody on the team understands the domain of the software, it may be worthwhile to discuss the software with a subject matter expert (SME) before writing a test plan.

## Test Fixtures

As you write your plan, you may find that you wish to test situations which are difficult to replicate. A script or program used to put the system under test into a state that is ready for testing is known as a **test fixture**. Test fixtures can be as simple as a series of steps to type into the program, but there is no real limit to their complexity. Test fixtures are often used to simulate external systems.

## Executing a Test Plan

Executing a test plan is called a test run. One way to think of test runs is as the equivalent of an object and a class. Executing a test plan generates a test run similar to how instantiating a class creates an object.

Executing a test plan should be relatively simple process, assuming that you have developed the test plan appropriately. After all, you have spent time ensuring that the preconditions are reasonable to set up, that the input values are specified, that the execution steps are detailed enough to follow, and that output values and postconditions are feasible to test. At this point, actually executing the tests should be a relatively mechanical process (an this is one of the reasons that automated testing is possible).

Although there is no universal status repository, these are a representative sampling of the kinds of test cases that might be encountered in your testing career. The names may change, but these six provide good coverage of all the situations that your test case may be in:

- Passed
- Failed
- Paused
- Running
- Blocked
- Error

A **passed** test is one in which all of the expected behavior match the observed behavior. Inversely, a failed test is one in which at least one aspect of the observed behavior was not equal to the expected behavior.

Whenever a test case is marked failed, there should be a corresponding defect filed. This could be a new defect, or it could be that a known defect has caused multiple problems. If there is no defect associated with a failed test case, then either the test case wasn't important enough to test, or the defect found wasn't important enough to file. If either is the case, you should rethink your test case!

A **paused** test is one that has started, but had to be put on hold for some period of time.
A **running** test is one which has started but has not yet completed, and thus the final result is not yet known.

In some cases, a test cannot be executed at the present time. This can be due to external factors (such as a piece of testing equipment not being available) or internal factors. In such cases, the test can be marked as **blocked**. This indicates that the test cannot currently be run, although it may run in a future test run when the issues blocking its execution have been removed.

Finally, in some cases, a test case simply cannot be executed, either now or in the future, due to a problem with the test case itself. In such cases, the test status can be marked as being in **error**. Tests marked as in error could have an issue with the test contradicting the requirements.

## Test Run Tracking

In most cases you want to record the results of test plans. This can be done using custom test tracking software, a simple spreadsheet program, or even just a notebook. In some cases, this will be necessary due to the regulatory environment, but even if it is not required, keeping track of what tests have passed and which have not will be extremely useful.

When tracking a test run, there are several pieces of information that you will want to include:

1. The date the test was executed
2. The name or other identifier (e.g., login or ID number) of the tester
3. The name or other identifier of the system under test 4. An indication of what code was under test. This may be a tag, a link, a version number, a build number, or some other form of identification.
4. The test plan the test run corresponds with
5. The final status of each test case. Note that temporary statuses, such as PAUSED, should be changed to the final status before finishing the
6. A list of any defects filed as a result of the test case, if any, or other reasons for any status that is not PASSED.

If a test fails, then one of two things should happen: Either a new defect should be filed or the already-known defect that is causing the failure should be noted. A defect indicates that the system is not operating as designed; the expected behavior does not match the observed behavior.

## Traceability Metrices

We have informally developed tests that we suppose will meet requirements, but we can double-check that our requirements and test plan are in sync by building traceability matrix. A traceability matrix is simply a way of determining which requirements match up with which test plans and displaying it as an easy to understand diagram. They consist of a list of the requirements (usually just the requirement identifiers) and a list of the test cases numbers which correspond to those requirements (i.e., the ones that test specific aspects of that requirement)

Occasionally, in the "real world", there may be some tests that do not officially line up with a specific requirement. For example, if a systems engineer did not put in a requirement for reliability, the test plan may still include a test for ensuring that the system works even when running for an entire day. This is certainly not a best practice, but it does happen occasionally. If this occurs, the best course of action would be to create a requirement for reliability that it can be tested against.

Of course, a traceability matrix provides a very simple overview of the test coverage. The fact that every requirement has been tested does not mean that each requirement has been tested thoroughly.

Traceability matrices are a good way to double-check your work and report to others outside of your team how well covered the system is from a test perspective. In time crunches, you or your manager may decide that certain parts or functions of the system are more important to test than others, and so you may not even write tests for these less-important aspects. Again, this is not a good practice, but at least you can use a traceability matrix to keep track of where the gaps in your testing coverage are. Customers and management, especially in highly regulated fields such as defense contracting and medicine, may also require traceability matrices as a way of proving that the systems have been tested to at least a baseline level.
