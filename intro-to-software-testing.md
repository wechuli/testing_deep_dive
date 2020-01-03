# What is Software Testing

## What Software Testing is NOT

- It's not finding every single defect
- It's not randomly pressing buttons, hoping that something will break
- It's not hoping something will break
- It's not something you do after all the programming is complete
- It's really not something you postpone until users start complaining

## Definition of Software Testing

At a high level, software testing is a way of providing an estimate of software quality to stakeholders.

Software testing provides an independent view of the software product.

## Verification and Validation

Software testing also involves ensuring that the right software was created. Verification is ensuring that you're building the software right; validation is ensuring that you're building the right software. In other words, verification is ensuring that the system doesn't crash, that it meets the requirements, that it handles failures gracefully etc. Validation is ensuring that the requirements meet the actual needs of the customer.

A system with a good automated test suite will allow you to make changes with the assurance that you have not created additional defects in so doing.

A defect is an issue that either breaks the functionality of the system as it's currently understood or does not meet the requirements of the program.

Being familiar with the system under test and its domain can allow you to perform "seal of your pants" testing; that is, testing for behavior that is not formally specified, but based on your knowledge of the system and domain, is to be expected.

Software testing allows you to determine the impact of found defects, as well as the potential risks of fixing defects, making enhancements, or simply providing workarounds.

Remember that the reason behind testing software is to estimate - and if possible , reduce- the risk to stakeholders. Understanding the possible risks can itself help to reduce risk. Testing helps figure out whether there are issues with the software which are trivial, or problems which should stop the product from shipping because major functionality does not work. By helping determine the level of risk, software testers allow the other stakeholders involved to make appropriate decisions.

# Why Test Software

## 1. No Software Developer is Perfect

## 2. Catching Defects Sooner Rather than Later

The Golden Rule of Testing is that you should find defects as early as you can. If you find problems with the software early on, it is often trivial for a developer to add a fix, nobody external to the team may ever know. Software testing allows you to find these errors before users see them, when your team will do a better job of fixing them, with less impact to the bottom line.

## 3. Stability

Developing software is a complex process. At some times, on some teams, it can even devolve into chaos. A testing team can help alleviate this by providing stability. By ensuring that developers continue to work on software that contains fewer defects, the software can stay on a more stable footing. Additional functionality is less likely to be built on top of a shaky foundation.

## 4. Customer Advocacy

QA engineers have a special role to play - they act as a representative of the customers and users of the software. Their role is to ensure that the customer gets high-quality software that is what the customer wants.In fact, in some organizations, software testers have the power to halt a release or allocate resources in order to ensure that the customer receives the right software, built right.

## 5. An Independent, Whole-System Perspective

Developers are focused on a very small parts of a system, with which they become intimately familiar. Rare is the developer who has an understanding of the entire system under development. Testers may not have depth of knowledge of any piece of the software, but do tend to have a broad perspective of the system as a whole. They are testing various aspects of the system, trying out new functionality and installing it on different kinds of systems.

This whole-system perspective provides a valuable counterpoint to those who are heads-down on one area of the software. Understanding how different subsystems work together, and how functionality works from a user perspective, lets QA personnel provide information on the status of the system as a system. This also makes testers a valuable resource when new functionality is added or modified, as they will understand how this might impact the overall system.

## 6. Ensuring Quality

While quality does not only mean “reducing the number of defects”, it is certainly an important part. By finding defects, software testers directly improve the quality of software.

## 7. Risk

The reason for testing software boils down to minimizing risk, for everybody involved: customers, users, developers etc. Independent testing of the software allow for objective analysis of the quality of the system. This reduces risk by providing information on the status of the system, both at a high level and a low level. Software development is a complex and risky process. If you want to reduce risk, software testers are essential as part of the team.

# Testing Basics

The core concept of testing is checking **expected behavior** against **observed behavior**. That is, ensuring that the software does what you expect it to under certain circumstances. There will be lots of adjustments, wrinkles, and caveats to that, but the root of all testing is comparing expected behavior with observed behavior.

## Equivalence Classes

An **equivalence class** (also called an equivalence partition) is one set of input values that maps to an output value. You can think of them as different "groups" of input values that do something similar. This enables testers to create tests which cover all parts of functionality, and avoid over testing just one part.

Equivalence class partitioning is the act of determining our equivalence classes and ensuring that they do not overlap at all, but do cover all possible input values. In other words, they must maintain a strict partitioning.

### Interior and Boundary Values

There's an axiom in testing that defects are more likely to be found near boundaries of two equivalence classes. These values -the "last" of one equivalence class and the "first" of a new equivalence class - are called boundary values. Values which are not boundary values are called interior values.

The reason why defects are most likely to be found near the boundary is that it is much more likely for code to have an error near a boundary because equivalence classes are so close.

One could also consider implicit boundary values. In contrast to explicit boundary values, which are a natural outgrowth of requirements, implicit values grow out of the system under test or the environment under which the system operates.

## Base Cases, Edge Cases, Corner Cases

- **base case** - the system is operating within expected parameters for normal use.
- **edge case** - When input values are outside normal operating parameter or are approaching the limits of what the system can handle, this is called an edge case.
- **corner cases** - also called **pathological** refer to situations where multiple things go wrong at the same time, or where a value is put, to put it bluntly, ridiculously out of range from what is expected.

## Success Cases and Failure Cases

When discussing test cases, there are two kinds of output that one would expect from a given test. First, there may be a **success case** (also called a **positive test case**); that is, the case returns an expected result given the input given to it. In general, tests following the happy path of what a user would normally do should be success cases.

**Failure cases** also called negative test cases are cases in which we expect the system to "fail" for some reason, such as attempting to write to a read-only disk, getting the square root of a negative number, or attempting to add an invalid username to a system. In failure cases, instead of returning a correct result, the system will do… something else. What this “something else” is will vary from test to test, and with what kind of functionality is being tested. Some examples might be returning an error code or default value, throwing an exception, shutting the system down, or simply logging the error to a log file or stderr.

## Black-,White-, and Grey-Box Testing

There are various ways of testing a system, each of which has benefits and drawbacks.

- Perhaps the easiest kind of testing to understand is `black-box testing`. In black-box testing, the tester has no knowledge of the internal workings of the system and accesses the system, as a user would. In other words, the tester does not know about what database is in use, what classes exist, or even what language the program is written in. Instead, testing occurs as if the tester were an ordinary user of the software. The black-box tester focuses on whether or not the system under test operates as expected from the user's point of view and is free from user facing defects.
- The opposite of black-box testing is white-box testing. Here, the tester has intimate knowledge of the codebase and directly tests the code itself. White-box tests can test individual functions of the code, often looking at much more granular specs of the system than black-box tests. White-box tests access the code as code - checking that return values from functions are correct, ensuring that objects are instantiated properly - instead of looking at the system from a user's perspective.
- **Grey-box testing**, as its name implies, is a hybrid approach between white and black-box testing.Grey-box testing involves accessing the system as a user (as a black-box tester would do), but with knowledge of the codebase and system (as a white-box tester would have). Using this knowledge, the grey-box tester can write more focused black-box tests.

## Static and Dynamic Testing

Another way of categorizing tests is to group them into static tests and dynamic tests. In dynamic tests, the system under test is actually running; the code is executed.

A static test, by contrast, does not execute the code. Rather, it attempts to test aspects of the system without actually running the system. Examples of static testing would be running a linter or having somebody review the code manually without actually running it.
