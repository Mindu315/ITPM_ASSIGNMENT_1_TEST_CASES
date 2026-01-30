# ITPM_ASSIGNMENT_1_TEST_CASES

Playwright tests for the Singlish → Sinhala conversion assignment.

## Prerequisites

- Node.js (v14+ recommended)
- npm

## Install

Install project dependencies:

```bash
npm install
```

## Run tests

Run the full test suite with Playwright:

```bash
npx playwright test
```

Run the single spec file:

```bash
npx playwright test tests/singlish-to-sinhala.spec.js
```

Run tests in headed mode or debug if needed:

```bash
npx playwright test --headed
npx playwright test --debug
```

## Project layout

- `package.json` — project scripts and dependencies
- `playwright.config.js` — Playwright configuration
- `tests/` — test specs (e.g. `tests/singlish-to-sinhala.spec.js`)

## Notes

- Tests use Playwright; adjust `playwright.config.js` for browsers or timeouts.
- If you see failures, run a single spec in headed mode for investigation.

## Author

Generated README for the assignment tests.
