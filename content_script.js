function filterButton(button) {
  let buttonText = button.innerText.toLowerCase();
  return buttonText.includes("accept") || buttonText.includes("agree");
}

function acceptCookies() {
  // Fetch all elements susceptible to be buttons
  let buttons = document.querySelectorAll('div[role="button"], button');

  // Filter the cookie buttons (must be improved)
  let acceptButtons = Array.from(buttons).filter((button) => filterButton(button));
  console.log("Qualified: ", acceptButtons);

  // Click on each button (ideally there should be only one)
  acceptButtons.forEach((button) => {
      console.log("Clicking: ", button);
      button.click();
  });
}

acceptCookies();