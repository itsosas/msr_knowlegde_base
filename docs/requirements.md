# MSR Knowledge Base

# Requirements Document

## 1. Project Overview

The MSR Knowledge Base is a single-page web application designed to help new PhD students and researchers understand the resources and techniques available for Mining Software Repositories (MSR) research.

The application will organize information into four categories: Data Sources, Collection Methods, Analysis Methods, and Publication Venues. Users will be able to navigate between these categories through a simple and consistent interface.

## 2. Stakeholders

- **Primary users:** PhD students and researchers conducting MSR research.
- **Customer:** MSR Research Group Lead.
- **Developer:** Software Engineer who responsible for requirements analysis, implementation, testing, and documentation.

## 3. User Stories

### 01: Browse Data Sources

**As a** PhD student, **I want** to view available software engineering data sources, **so that** I can identify appropriate sources for my research.

**Acceptance criteria:**

- The Data Sources section displays the seven specified sources: GitHub, Stack Overflow, JIRA, App Stores, Travis CI/Jenkins, Mailing Lists, and npm Registry.
- Each source has a name, data type, and brief description.
- The information is presented in a readable format.

### 02: Explore Collection Methods

**As a** software engineering researcher, **I want** to explore different data collection methods and their advantages and disadvantages, **so that** I can select an appropriate technique for collecting research data.

**Acceptance criteria:**

- The Collection Methods section includes REST APIs, GraphQL, Selenium, BeautifulSoup, Database Dumps, and Manual Download.
- Each method explains its purpose.
- Each method includes relevant advantages and disadvantages.

### 03: Explore Analysis Methods

**As a** MSR researcher, **I want** to review available data analysis methods and their common use cases, **so that** I can choose suitable techniques for analyzing collected data.

**Acceptance criteria:**

- The Analysis Methods section includes statistical analysis, regression analysis, thematic analysis, grounded theory, machine learning, time series analysis, network analysis, and visualization.
- Each method identifies its analysis type and common use cases.
- The information is organized consistently.

### 04: Compare Publication Venues

**As a** PhD student preparing a research paper, **I want** to compare relevant conferences and journals, **so that** I can identify appropriate venues for submitting my work.

**Acceptance criteria:**

- The Publication Venues section includes all six specified conferences and three specified journals.
- Each venue displays its name, abbreviation, venue type, focus area, and MSR relevance.
- Conferences and journals are clearly distinguished.
- Relevance is identified as high or medium, as appropriate.

### 05: Navigate Between Categories

**As a** knowledge-base user, **I want** to switch between the four categories using navigation tabs or buttons, **so that** I can find information without navigating to separate web pages.

**Acceptance criteria:**

- The page provides navigation options for all four categories.
- Selecting a navigation option displays its corresponding content.
- The selected category is visually identifiable.
- Users can switch between categories without reloading the page.

### 06: Use a Readable Interface

**As a** researcher, **I want** the knowledge base to have a clean and readable design, **so that** I can find and understand information efficiently.

**Acceptance criteria:**

- The page uses consistent fonts, spacing, headings, and content formatting.
- Navigation controls are clearly identifiable.
- Content is presented using tables, lists, or cards.
- The layout remains usable on common desktop and mobile screen sizes.

### US-07: Access the Published Website

**As a** PhD student, **I want** to access the knowledge base through a public web link, **so that** I can use the reference guide without downloading the project.

**Acceptance criteria:**

- The website is published through GitHub Pages.
- Users can access the published page through a public URL.
- Changes merged into the main branch are deployed automatically through the configured workflow.

## 4. Functional Requirements

- **The system shall provide four categories: Data Sources, Collection Methods, Analysis Methods, and Publication Venues.**
- **The system shall display the required information for each category as specified in the customer meeting notes.**
- **The system shall allow users to switch between categories using navigation tabs or buttons.**
- **The system shall display content in an organized and readable format.**
- **The system shall identify publication venue types and their relevance to MSR research.**
- **The system shall be publicly accessible through GitHub Pages.**

## 5. Non-Functional Requirements

- **Usability:** Navigation shall be simple and understandable for new researchers.
- **Readability:** Text and content layouts shall be easy to read.
- **Responsiveness:** The interface shall adapt to common desktop and mobile screen sizes.
- **Maintainability:** HTML, CSS, JavaScript, tests, and documentation shall be organized into appropriate files and directories.
- **Reliability:** Navigation and content display shall behave consistently during normal use.
- **Automated Testing:** GitHub Actions shall run the configured tests on pushes and pull requests.
- **Accessibility:** Navigation and content shall use appropriate semantic HTML and accessible labels.

## 6. Scope and Planned Development

The complete system is planned to include all four knowledge-base categories, navigation, styling, automated testing, and GitHub Pages deployment.

The initial implementation will focus on page structure and navigation together with the Data Sources content. The remaining categories and additional styling improvements will be tracked through GitHub issues and milestones as future work.

## 7. Assumptions and Constraints

- The application is intended as a reference guide rather than a system for collecting or analyzing repository data directly.
- The initial implementation will use HTML, CSS, and JavaScript.
- The content will be based on the customer meeting notes.
- The project will be maintained in a public GitHub repository.
- The project will use GitHub Issues, milestones, branches, pull requests, and GitHub Actions to demonstrate the software development process.
