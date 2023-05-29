# Lab 8 - Starter

## Check your Understanding
1. *Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.*

I would run the tests on GitHub push, making sure to make edits on a different branch from the one GitHub Pages uses to build the site. While it may be less convenient than manual testing, since the tests are automated, I won't have to worry about forgetting to run tests. Also, I can make GitHub require a given branch to pass all tests before merging into the pages branch.

I actually think it is best to complement this with local tests, to guide development (and also simply for the convenience). The test suite should be small so the time it takes to run them should not be too long for local tests to be a bad idea.

2. *Would you use an end to end test to check if a function is returning the correct output?*
No.

3. 

