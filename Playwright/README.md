# Singlish to Sinhala Translation Testing - ITPM Assignment 1

This repo has test cases for Singlish -> Sinhala for website [https://www.swifttranslator.com/](https://www.swifttranslator.com/) using Playwright automation framework.

## 🚀 Getting Started

### Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

### Installation

Follow these steps to set up and run the test suite:

#### Step 1: Clone the Repository

```bash
git clone https://github.com/LeshanieM/Playwright-Test-Cases.git

```
Open the folder in VS code

#### Step 2: Install Dependencies

Install all required npm packages including Playwright:

```bash
npm install
```

This command will:

- Install Playwright and its dependencies

#### Step 3: Install Playwright Browsers (Only if you haven't download them earlier)

Playwright requires browser binaries to run tests. Install them using:

```bash
npx playwright install
```

This command will download and install:

- Chromium
- Firefox
- WebKit (Safari engine)

**Note:** The download size is approximately 300-400 MB depending on your operating system.

#### Step 4: Run the Tests

Execute all test cases using:

```bash
npx playwright test
```

#### Generate and view test report

```bash
npx playwright show-report
```

#### Run tests with UI mode (interactive)

```bash
npx playwright test --ui
```
## Assignment Overview

This repository contains the Playwright automation solution for *Assignment 1* of the IT3040 – ITPM module.

The objective of this assignment is to evaluate:
- The *accuracy* of converting Singlish/Thanglish input into Sinhala/Tamil output
- The *robustness* of the system under different input conditions
- The *usability and stability* of the user interface

Backend APIs, performance testing, and security testing are *out of scope*.
README ekata danne mehemeda