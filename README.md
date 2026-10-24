# MSR Knowledge Base

[![MSR Knowledge Base CI](https://github.com/itsosas/msr_knowlegde_base/actions/workflows/ci.yml/badge.svg)](https://github.com/OWNER/REPO/actions/workflows/ci.yml)

## Project Overview

The MSR Knowledge Base is a website project for organizing information about Mining Software Repositories (MSR). It provides a central place to explore data sources, collection methods, analysis methods, and publication venues.

## Current Implementation

The first milestone establishes the website's structure and navigation. It includes:

- Home page
- Data Sources section
- Collection Methods section
- Analysis Methods section
- Publication Venues section
- Responsive styling and interactive navigation

The later sections will be expanded in future milestones.

## Project Structure

```text
.
├── docs/
│   └── requirements.md
├── src/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── tests/
│   ├── test.js
│   └── test_checklist.md
├── .github/
│   └── workflows/
│       └── ci.yml
└── README.md
```

## Running the Website

Open `src/index.html` in a web browser. No additional server is required for the current implementation.

## Running Automated Tests

Install Node.js if it is not already installed. From the repository's root directory, run:

```bash
node --test tests/test.js
```

The tests check the navigation structure, matching content sections, stylesheet and JavaScript links, navigation logic, and CSS visibility rules.

## Testing

The test checklist is available at `tests/test_checklist.md`. The project also uses GitHub Actions to run automated tests when relevant changes are pushed or a pull request is opened.

## Planned Milestones

1. **M1 — Page Structure & Navigation:** Establish the HTML structure and interactive navigation.
2. **M2 — Data Sources Content:** Add information about MSR data sources.
3. **M3 — Collection & Analysis Methods:** Document collection and analysis techniques.
4. **M4 — Publication Venues & Polish:** Add publication venues and refine the website.

## Requirements

See [`docs/requirements.md`](docs/requirements.md) for the project's requirements and scope.
