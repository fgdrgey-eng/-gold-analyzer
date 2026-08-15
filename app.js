
// Gold Analyzer - XAUUSD M5

function demoAnalysis() {
    const price = 0;

    const direction = Math.random() > 0.5 ? "شراء 🟢" : "بيع 🔴";
    const success = Math.floor(Math.random() * 16) + 70;

    document.getElementById("signal").textContent = direction;
    document.getElementById("confidence").textContent = success + "%";

    if (price === 0) {
        document.getElementById("entry").textContent = "بانتظار السعر";
        document.getElementById("sl").textContent = "سيتم تحديده";
        document.getElementById("tp").textContent = "سيتم تحديده";
    }

    const status = document.getElementById("status");

    if (status) {
        status.textContent =
            "تم التحليل — هذه إشارة تجريبية وليست توصية مالية";
    }
}

function analyzeGold() {
    demoAnalysis();
}

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(
        'button[onclick="demoAnalysis()"]'
    );

    if (button) {
        button.addEventListener("click", demoAnalysis);
    }
});
