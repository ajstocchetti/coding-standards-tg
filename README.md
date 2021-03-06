# Turing Group Software Development Standards

This is a continual process. It is unrealistic to think that there is a perfect set of standards that cannot be improved upon. There are certainly topics and ideas that were not considered when creating these standards and should be incorporated into these standards as they are identified. Additionally, as the development team grows and changes, the need and scope of development standards will also change. The same is true of technology. These standards are meant to ease and simplify the development process, and should be maintained as such.

TODO: reconcile/combine with https://turinggroup.atlassian.net/wiki/spaces/TGKB/pages/516358175/Development+Software+Maintenance

# Version Control

Git is to be used for version control.


## Branching and Commits
Git branching should follow the following model: https://nvie.com/posts/a-successful-git-branching-model. Specifically,
* All code is developed on a feature branch. Feature branches are merged into the dev (or development) branch after going through code review.
* The master branch (or production branch) is not to be updated directly. Code may only be merged into this branch, after being tested on the development branch (or another pre-production environment branch).

Commit messages are to contain meaningful language about the changes made in the commit. [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/), by Chris Beams, covers the content and style of how a commit message should be structured. Commits with incomplete/broken code should be prefaced with `WIP` to signal that the codebase is in an unstable state. References to Jira tickets are also encouraged.


## Code Review
Code review is handles through Pull Requests. Before merging any pull requests, a development lead is responsible for ensuring:
  * PR has been code reviewed by at least one other developer (not the author of the PR)
  * All required corrections have been implemented
  * PR & related migrations do **NOT** contain development, test and/or custom application accounts, user ID's and/or passwords
  * Relevant test suites are passing
  * PR has been assessed against common coding vulnerabilities as outlined in the [OWASP Top 10](https://www.owasp.org/index.php/Top_10_2013-Top_10).
  * The code adheares to company coding and linting standards (see [Coding Style](#coding-style-guide))


## Git server
Sadly, choosing the right git server can be a lot of work. AWS Code Commit integrates easily with AWS Code Pipeline, but the interfaces for managing code (Pull Requests, code review) are lacking. BitBucket integrates well with Jira tickets, but not with AWS. There is a company GitLab account, which allows us to control the server (and content thereof), but does not integrate easily with other services. There is no correct service to use - the following should be considered guidelines to assist in this choice.

For internal projects, either the company GitLab (https://git.turinggroup.com) or GitHub (https://github.com/turinggroup/) should be used. There is also a Server Central BitBucket account that will likely be used/consolidated with the two Turing Group git servers in the future.

For client projects, the client's git server (GitLab, private GitHub account) should be used if available. A Code Commit repository within the client's AWS environment may ale be used. If none of these are available, the company GitHub (https://github.com/turinggroup/) may be used.


# Coding Style Guide

## Node.js

Use Prettier and Eslint for style and linting, respectively.

[Prettier](https://prettier.io/) is an opinionated formatter. Using prettier allows all javascript code to be formatted the same, making it easier to switch from one project to the next. Prettier deals with things like spacing, adding semicolons and using single quotes for strings.

[Eslint](https://eslint.org/docs/rules/) is a linter. Linting helps catch bugs or other issues in your code.

To set up Eslint and Prettier
```bash
# install as dev dependencies
npm install -D prettier eslint eslint-plugin-prettier husky lint-staged
```
Then copy the following into your package.json file. This sets up a pre-commit hook, so code is pretty-ified and linted automatically on git commit.
```json
"scripts": {
  "lint": "eslint **/*.js",
  "lint:write": "eslint **/*.js --fix",
  "prettier": "prettier --write **.js && prettier --write **/*.js"
},
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.(js|jsx)": ["npm run lint:write", "git add"]
}

```

Finally, copy the following files from the nodejs directory in this repository into the root directory of your new project:
- .eslintignore
- .eslintrc.js
- prettier.config.js


## Golang

In general, you should use the built-in command `go fmt` to lint code from the command line. Many modern code editors, such as [VS Code](https://code.visualstudio.com/) and [Atom](https://atom.io/), have Go plugins that will do this for you automatically on save. These editors also allow type-ahead support, pre-compilation checks, and some [godoc standards](https://blog.golang.org/godoc-documenting-go-code) checks. **You should use these editors, as they'll make life easy.**

Secondly, run `dep ensure -update` to keep your dependency tree up-to-date and vendorized within the repo.

## Python

## Ruby

Use [rubocop](http://batsov.com/rubocop/) for coding style and [bundler](https://bundler.io/) for dependency management.

# Tests

Unit tests check expected behavior at the function or interface level. Many libraries exist to make unit testing easier:

- [MochaJS](https://mochajs.org/) (node.js)
- [RSpec](http://rspec.info/) (Ruby)
- [unittest](https://docs.python.org/3/library/unittest.html) (Python)
- [testify](https://github.com/stretchr/testify#testify---thou-shalt-write-tests) (Go)

Integration tests check expected behavior at the API level. Many of the same libraries above have extensions or techniques for integration testing. Some additional libraries to be aware of are:

- [ChaiJS](https://www.chaijs.com/) (node.js)
- [Capybara](http://teamcapybara.github.io/capybara/) (Ruby)


# CD/CI
