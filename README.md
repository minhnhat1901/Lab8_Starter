# Lab 8 - Starter

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

-> Within a Github action that runs whenever code is pushed

Explanation: I think this is the best option because it will run the tests whenever code is pushed, so it will be run often and will give the feedback on the changes. It will also be run before the code is merged into the main branch, so it will prevent any errors from being merged into the main branch. If the tests fail, the developer can quickly diagnose and correct the issues before those changes progress further down the development pipeline. On the other hand, Github Action is easy to use and can be set up quickly. It also provides a lot of flexibility in terms of what tests to run and when to run them. It's from Github so we don't need any additional tools or software to run the tests. Lastly, we can reduce the amount of time spent on manual testing and focus on other tasks.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

-> No because it is not a good practice to use end to end tests to check if a function is returning the correct output. Also, I believe that unit tests are better suited for this purpose.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

-> It's not efficient when we use unit tests to test the "message" feature of a messaging application. Unit tests are used to test the smallest unit of code, which is a function. The "message" feature is a complex feature that involves multiple functions and components. Therefore, it's better to use end-to-end tests to test the "message" feature.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

-> No, I would not use a unit test to test the "max message length" feature of a messaging application. The "max message length" feature is a complex feature that involves multiple functions and components. Also, the length is more than 80 characters, which might be very long message that if we use end-to-end testing, it's much efficient than unit testing. Therefore, it's better to use end-to-end tests to test the "max message length" feature.