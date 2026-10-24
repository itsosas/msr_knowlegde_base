const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

// Locate the website files.
const projectFolder = path.join(__dirname, "..");
const html = fs.readFileSync(
    path.join(projectFolder, "src", "index.html"),
    "utf8"
);
const css = fs.readFileSync(
    path.join(projectFolder, "src", "style.css"),
    "utf8"
);
const javascript = fs.readFileSync(
    path.join(projectFolder, "src", "script.js"),
    "utf8"
);

// Test 1: All five navigation buttons exist.
test("All five navigation tabs are present", function () {
    const tabs = [
        "home",
        "data-sources",
        "collection-methods",
        "analysis-methods",
        "publication-venues"
    ];

    for (const tab of tabs) {
        assert.ok(
            html.includes(`data-tab="${tab}"`),
            `Missing navigation tab: ${tab}`
        );
    }
});

// Test 2: Every navigation tab has a matching content section.
test("Every navigation tab has a matching section", function () {
    const tabs = [
        "home",
        "data-sources",
        "collection-methods",
        "analysis-methods",
        "publication-venues"
    ];

    for (const tab of tabs) {
        assert.ok(
            new RegExp(`<section[^>]*id="${tab}"`).test(html),
            `Missing content section: ${tab}`
        );
    }
});

// Test 3: HTML connects the CSS and JavaScript files.
test("HTML links the stylesheet and JavaScript", function () {
    assert.ok(html.includes('href="style.css"'));
    assert.ok(html.includes('src="script.js"'));
});

// Test 4: JavaScript handles clicks and updates tab selection.
test("JavaScript supports navigation clicks", function () {
    assert.ok(javascript.includes('addEventListener("click"'));
    assert.ok(javascript.includes('classList.add("active")'));
    assert.ok(javascript.includes('setAttribute("aria-selected"'));
});

// Test 5: CSS hides sections that are not selected.
test("CSS hides inactive content sections", function () {
    assert.match(
        css,
        /\.tab-content\[hidden\]\s*\{\s*display:\s*none;/
    );
});
