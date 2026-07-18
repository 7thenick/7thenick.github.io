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
7LIFESTYLE
────────────────────────

DURGESH SONAYYA

Model • Creator • Photographer • Filmmaker

[Portfolio]
[Daily Life]
[Photography]
[Films]
[Music]
[Projects]

ABOUT
Apne baare me short introduction.

GALLERY
Best photos aur videos.

WORK
• Modeling
• Content Creation
• Brand Collaborations
• Photography
• Filmmaking

CONTACT
Instagram
Email
WhatsApp

© 2026 7LIFESTYLE
});
