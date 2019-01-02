# Software Maintenance

Software maintenance is to be performed for all actively maintained development projects. Active (in process) projects are not subject to software maintenance, as they are being developed following the best practices set forth in this document.

The purpose of software maintenance is to keep software up to date and in line with best practices, thereby avoiding [bit rot/software rot](https://en.wikipedia.org/wiki/Software_rot). The major areas of concern are:
* Addressing any security vulnerabilities
* Conforming with best practices
* Keeping languages and dependencies up to date

Software maintenance is _not_ intended to be used to make arbitrary updates to a codebase, unless those updates support best practices, security upgrades, or language/dependency upgrades. Software maintenance can be used to identify vulnerabilities or areas for optimizations or new technologies, however these changes are to be discussed with the client and addressed as new development efforts (either through retainer time or as a new project).

*Frequency* Software maintenance is to be performed quarterly (once every 3 months).

During software maintenance reviews, to following are to be checked:
* Dependency and Security Audit - libraries, modules, dependencies, etc are to be reviewed for any known security risks. Any know vulnerabilities must be addressed.
* Language version - The production application is to be no more than 2 major releases behind the current Long Term Support (LTS) version for that language. If a language does not have LTS, than the software version should have been released no more than 2 years prior to the software maintenance audit.
For example, if Node.js version 8.9.0 is the current LTS version of Node, than projects must be on version 6.0 or later. Projects can be on versions newer than the LTS - version 10.10.3 is fine.
* Package version - Packages, libraries, modules, etc should be no more than 2 major versions behind the current version.
* Linting - Any changes to the SCTG linting standards should be applied to the codebase.

Additionally, any automated tests are to be run. If the testing environment must be updated, do so now. If the tests are broken, update or remove them now.
