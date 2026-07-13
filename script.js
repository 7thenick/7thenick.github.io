document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".buttons a");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.08)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
    });
  });

  const profile = document.querySelector(".profile");

  if (profile) {
    profile.addEventListener("click", () => {
      profile.style.transform = "scale(1.05)";
      setTimeout(() => {
        profile.style.transform = "scale(1)";
      }, 200);
    });
  }

});
