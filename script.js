(() => {
  const root = document.documentElement;
  const styleButtons = Array.from(document.querySelectorAll("[data-style-choice]"));
  const storageKey = "madanpark-style";
  const allowedStyles = ["editorial", "aurora", "spotlight", "os", "flow", "neon", "sakura"];

  const setStyle = (style) => {
    root.setAttribute("data-style", style);
    styleButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.styleChoice === style));
    });
    try {
      localStorage.setItem(storageKey, style);
    } catch {
      // Storage can be disabled in private contexts.
    }
  };

  try {
    const stored = localStorage.getItem(storageKey);
    if (stored && allowedStyles.includes(stored)) {
      setStyle(stored);
    }
  } catch {
    setStyle(root.getAttribute("data-style") || "editorial");
  }

  styleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const style = button.dataset.styleChoice;
      if (style) setStyle(style);
    });
  });

  document.querySelectorAll("[data-copy-email]").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.getAttribute("data-copy-email");
      if (!value) return;
      try {
        await navigator.clipboard.writeText(value);
        button.textContent = "Copied";
      } catch {
        button.textContent = value;
      }
    });
  });
})();
