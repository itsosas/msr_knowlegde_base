const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedTab = button.dataset.tab;

        tabButtons.forEach(function (tabButton) {
            tabButton.classList.remove("active");
            tabButton.setAttribute("aria-selected", "false");
        });

        tabContents.forEach(function (section) {
            section.classList.remove("active");
            section.hidden = true;
        });

        button.classList.add("active");
        button.setAttribute("aria-selected", "true");

        const selectedSection = document.getElementById(selectedTab);

        if (selectedSection) {
            selectedSection.hidden = false;
            selectedSection.classList.add("active");
        }
    });
});
