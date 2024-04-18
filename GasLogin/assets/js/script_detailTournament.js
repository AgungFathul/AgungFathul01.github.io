document.querySelectorAll(".tab-btn").forEach((tab) => {
  tab.addEventListener("click", (e) => {
    // Remove active class from all tabs
    document.querySelectorAll(".tab-btn").forEach((t) => {
      t.classList.remove("active");
    });

    // Add active class to current tab
    e.target.classList.add("active");

    // Get content element
    const content = document.querySelector(e.target.dataset.target);
    console.log(content);

    // Remove active class from all content
    document.querySelectorAll(".content").forEach((c) => {
      c.classList.remove("active");
    });

    // Add active class to current content
    content.classList.add("active");
  });
});
