# Lab 8 - Starter

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

-> Within a Github action that runs whenever code is pushed

Explanation: I think this is the best option because it will run the tests whenever code is pushed, so it will be run often and will give the feedback on the changes. It will also be run before the code is merged into the main branch, so it will prevent any errors from being merged into the main branch. If the tests fail, the developer can quickly diagnose and correct the issues before those changes progress further down the development pipeline. On the other hand, Github Action is easy to use and can be set up quickly. It also provides a lot of flexibility in terms of what tests to run and when to run them. It's from Github so we don't need any additional tools or software to run the tests. Lastly, we can reduce the amount of time spent on manual testing and focus on other tasks.

