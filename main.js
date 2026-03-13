const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener(
  "click",
  () => {
    console.log("grandparent");
  },
  { capture: true },
);

child.addEventListener("click", () => {
  console.log("child");
});

document.addEventListener("click", () => {
  console.log("document");
});
