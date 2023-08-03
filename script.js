//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const colorSelect = document.getElementById("colorSelect");
  const button = document.querySelector("input[type=button]");

  button.addEventListener("click", () => {
    const selectedOption = colorSelect.selectedIndex;

    if (selectedOption !== -1) {
      colorSelect.remove(selectedOption);
    }
  });
});
