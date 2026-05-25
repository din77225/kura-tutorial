// Copy-to-clipboard for prompt blocks
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".prompt").forEach((block) => {
    const btn = document.createElement("button");
    btn.className = "copy";
    btn.type = "button";
    btn.textContent = "COPY";
    btn.addEventListener("click", async () => {
      const text = block.querySelector(".prompt-text")?.innerText
        || block.innerText.replace(/^PROMPT\s*COPY/i, "").trim();
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = "COPIED";
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = "COPY";
          btn.classList.remove("copied");
        }, 1600);
      } catch (e) {
        btn.textContent = "ERR";
      }
    });
    block.appendChild(btn);
  });
});
