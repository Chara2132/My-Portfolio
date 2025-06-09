const projects = [
  {
    title: "Kernel Lab",
    description:
      "Una piattaforma dove gli utenti dilettanti possono imparare a usare i sistemi operativi Linux, che offre una documentazione e una TUI di test per i comandi base",
    link: "https://github.com/Chara2132/KernelLab",
  },
  {
    title: "Acqua Prober",
    description:
      "Realizzato per lo School Maker Day(2025), si tratta di un acquario intelligente in grado di autogestirsi senza bisogno di un essere umano.",
    link: "https://github.com/fede-chiodi/AcquaProber_SMD",
  },
  {
    title: "Lettura fotovoltaico",
    description:
      "Web page creata per l'istituto ISIT BASSI BURGATTI dove si legge un json per estrarre dati come l'irradiazione solare, la temperatura esterna e la velocità del vento, in modo che gli studenti possano vedere il tempo in diretta.",
    link: "None",
  },
];

function loadProjects() {
  const container = document.getElementById("projects-container");
  projects.forEach(({ title, description, link }) => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
      <a href="${link}" target="_blank" rel="noopener noreferrer">🔗 Visualizza</a>
    `;
    container.appendChild(card);
  });
}

function setupThemeToggle() {
  const toggleBtn = document.getElementById("toggle-theme");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  }

    window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";

    document.body.classList.toggle("dark-mode", isDark);
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    });

    toggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
    });

}


window.addEventListener("DOMContentLoaded", () => {
  loadProjects();
  setupThemeToggle();
});
