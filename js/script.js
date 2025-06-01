document.addEventListener("DOMContentLoaded", function() {
    function initCollapsibleMenus() {
        document.querySelectorAll(".list-group-item[data-bs-toggle='collapse']").forEach(item => {
            const icon = item.querySelector("i");
            const targetId = item.getAttribute("href");
            const targetCollapse = document.querySelector(targetId);

            if (!icon || !targetCollapse) return;

            const updateIcon = () => {
                icon.style.transform = targetCollapse.classList.contains("show") 
                    ? "rotate(180deg)" 
                    : "rotate(0deg)";
            };

            item.addEventListener("click", updateIcon);
            targetCollapse.addEventListener("shown.bs.collapse", () => icon.style.transform = "rotate(180deg)");
            targetCollapse.addEventListener("hidden.bs.collapse", () => icon.style.transform = "rotate(0deg)");
            
            updateIcon();
        });
    }

    function initTabSystem() {
        const expectedTabs = [
            "INVENTORY",
            "SUPPLY", 
            "MONITORING",
            "USER & ACCESS",
            "REPORTS",
            "WAREHOUSE",
            "AUTOMATION",
            "CLOUD USE"
        ];

        const buttons = Array.from(document.querySelectorAll(".tab-btn"));
        const contents = Array.from(document.querySelectorAll(".tab-content"));

        if (buttons.length !== expectedTabs.length || contents.length !== expectedTabs.length) {
            console.error(`Tab system requires exactly ${expectedTabs.length} tabs`);
            return;
        }

        buttons.forEach((button, index) => {
            const buttonText = button.textContent.trim().toUpperCase();
            if (buttonText !== expectedTabs[index]) {
                console.error(`Tab ${index + 1} should be "${expectedTabs[index]}" but found "${buttonText}"`);
            }
        });

        const activateTab = (index) => {
            buttons.forEach((btn, i) => {
                btn.classList.toggle("active", i === index);
                contents[i].classList.toggle("active", i === index);
            });
        };

        buttons.forEach((button, index) => {
            button.addEventListener("click", () => activateTab(index));
            button.removeAttribute("onclick"); 
        });

        activateTab(0);
    }

    initCollapsibleMenus();
    initTabSystem();
});
