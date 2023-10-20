// const listTabs = Array.from(document.querySelectorAll("#selected-tab"));
// const contentArray = Array.from(document.querySelectorAll("#selected-content"));

// listTabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     const currentTab = listTabs.indexOf(tab);
//     listTabs.forEach((t) => {
//       if (listTabs.indexOf(t) === currentTab) {
//         t.classList.add("border-[#FA5959]");
//         t.classList.remove("border-transparent");
//       } else {
//         t.classList.remove("border-[#FA5959]");
//         t.classList.add("border-transparent");
//       }
//     });
//     contentArray.forEach((content) => {
//       if (contentArray.indexOf(content) === currentTab) {
//         content.classList.remove("hidden");
//       } else {
//         content.classList.add("hidden");
//       }
//     });
//   });
// });

let tabs = document.querySelectorAll(".tab");
let indicator = document.querySelector(".indicator");
let panels = document.querySelectorAll(".tab-panel");

indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
indicator.style.left =
  tabs[0].getBoundingClientRect().left -
  tabs[0].parentElement.getBoundingClientRect().left +
  "px";

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    let tabTarget = tab.getAttribute("aria-controls");

    indicator.style.width = tab.getBoundingClientRect().width + "px";
    indicator.style.left =
      tab.getBoundingClientRect().left -
      tab.parentElement.getBoundingClientRect().left +
      "px";

    panels.forEach((panel) => {
      let panelId = panel.getAttribute("id");
      if (tabTarget === panelId) {
        panel.classList.remove("invisible", "opacity-0");
        panel.classList.add("visible", "opacity-100");
      } else {
        panel.classList.add("invisible", "opacity-0");
      }
    });
  });
});
