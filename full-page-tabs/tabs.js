function openTab(tab, tabc, color) {
  let tabLink = document.getElementsByClassName("tab-link");
  let contentContainer = document.getElementsByClassName("content-container");
  let tabContainer = document.getElementById(tabc);

  for (let i = 0; i < contentContainer.length; i++) {
    contentContainer[i].style.display = "none";
  }

  for (let i = 0; i < tabLink.length; i++) {
    tabLink[i].style.backgroundColor = "";
  }

  document.getElementById(tab).style.display = "block";
  tabContainer.style.backgroundColor = color;
}
