# Turing Group Software Development Standards

This is a continual process. It is unrealistic to think that there is a perfect set of standards that cannot be improved upon. There are certainly topics and ideas that were not considered when creating these standards and should be incorporated into these standards as they are identified. Additionally, as the development team grows and changes, the need and scope of development standards will also change. The same is true of technology. These standards are meant to ease and simplify the development process, and should be maintained as such.

TODO: reconcile/combine with https://turinggroup.atlassian.net/wiki/spaces/TGKB/pages/516358175/Development+Software+Maintenance

# Version Control

Make Pull Requests. Before merging any PRs, a dev lead is responsible for ensuring:
  * PR has been code reviewed by at least one other developer (not the author of the PR)
  * All required corrections have been implemented
  * PR & related migrations do **NOT** contain development, test and/or custom application accounts, user ID's and/or passwords
  * Relevant test suites are passing
  * PR has been assessed against common coding vulnerabilities as outlined in the [OWASP Top 10](https://www.owasp.org/index.php/Top_10_2013-Top_10).



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
1. `go fmt` your code.
2. Comment your code according to [godoc standards](https://blog.golang.org/godoc-documenting-go-code).
3. Keep your dependency tree up-to-date. `dep ensure -update` will do this for you.


## Python

## Ruby


# Tests

Write tests. Do it.

# CD/CI
