# MSR Knowledge Base — Test Checklist

## Purpose

This checklist documents manual and automated checks for the MSR Knowledge Base website.

## Automated Tests

Automated tests are implemented in `tests/test.js` and run using Node.js's built-in test runner.

- [x] Verify that all five navigation tabs exist.
- [x] Verify that every navigation tab has a matching content section.
- [x] Verify that the HTML links to the CSS stylesheet and JavaScript file.
- [x] Verify that JavaScript contains navigation click-handling logic.
- [x] Verify that CSS hides inactive content sections.

**Automated test result:** All five tests passed locally, and the GitHub Actions CI workflow completed successfully.

## Manual Tests

- [x] Open the website in a web browser.
- [x] Confirm that the Home section appears initially.
- [x] Click Data Sources and verify that its section appears.
- [x] Click Collection Methods and verify that its section appears.
- [x] Click Analysis Methods and verify that its section appears.
- [x] Click Publication Venues and verify that its section appears.
- [x] Confirm that the navigation remains visible when switching sections.

## Limitations and Future Testing

The automated tests check the website's HTML, CSS, and JavaScript source. They do not simulate real browser clicks. Future improvements could include browser automation, accessibility checks, and testing across multiple browsers and screen sizes.
