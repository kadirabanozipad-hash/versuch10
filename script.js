const bundeslandInfos = {
  BY: {
    name: "Bayern",
    text: "Bayern ist das flächengrößte Bundesland Deutschlands."
  },
  NRW: {
    name: "Nordrhein-Westfalen",
    text: "NRW ist das bevölkerungsreichste Bundesland."
  },
  BE: {
    name: "Berlin",
    text: "Berlin ist die Hauptstadt Deutschlands."
  }
};

const infoBox = document.getElementById("info-box");
const paths = document.querySelectorAll("svg path");

paths.forEach(path => {
  path.addEventListener("click", () => {
    const id = path.id;
    if (bundeslandInfos[id]) {
      infoBox.innerHTML = `
        <h2>${bundeslandInfos[id].name}</h2>
        <p>${bundeslandInfos[id].text}</p>
      `;
    }
  });
});
