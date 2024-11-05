console.log("Script loaded");
document.addEventListener("DOMContentLoaded", () => {
    const skillButtons = document.querySelectorAll(".skills-section .cells .cell button");

    skillButtons.forEach(button => {
        button.addEventListener("click", () => {
            const cell = button.closest(".cell"); // Select the cell containing the button
            const description = button.nextElementSibling;
            const skillLevel = button.getAttribute("data-skill-level");

            if (description) {
                // Toggle the active class on cell to expand it
                cell.classList.toggle("active");

                // Toggle the active class on description to show/hide it
                description.classList.toggle("active");

                // Reset and add background color based on skill level
                description.classList.remove("blue-bg", "yellow-bg");
                if (description.classList.contains("active")) {
                    description.classList.add(skillLevel === "blue" ? "blue-bg" : "yellow-bg");
                }
            }
        });
    });
})