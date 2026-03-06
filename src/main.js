import { tournaments } from "./data/tournamentDB.js";
import { StatusBadge } from "./components/StatusBadge.jsx";

const app = document.getElementById("app");

let html = `<h2 class="mb-4">Tournaments</h2><div class="row">`;




for(let i = 0; i < tournaments.length; i++) {
  const t = tournaments[i];
  html += `
  <div class="col-12 col-md-6 col-lg-4 mb-4">
    <div class="card shadow-sm h-100">
      <div class="card-body">
        <h5 class="card-title">${t.name} ${StatusBadge(t.status)}</h5>
        <p class="card-text text-muted">${t.sport}</p>
        <p class="card-text">Some description about the tournament can go here.</p>
      </div>
    </div>
  </div>
  `;






}

html += `</div>`;
app.innerHTML = html;