async function copyCode(button) {
    const container = button.closest(".code-container");
    const code = container.querySelector("code").innerText;

    try {
        await navigator.clipboard.writeText(code);

        const originalText = button.innerText;
        button.innerText = "Nukopijuotas!";

        setTimeout(() => {
            button.innerText = originalText;
        }, 1500);

    } catch (err) {
        console.error("Nepavyko nukopijuoti:", err);
        alert("Nepavyko nukopijuoti kodo :(( ");
    }
}