export function StatusBadge(status){
  if(status === "On Going") return `<span class="badge rounded-pill bg-success ms-2">${status}</span>`;
  if(status === "Upcoming") return `<span class="badge rounded-pill bg-primary ms-2">${status}</span>`;
  if(status === "Pending") return `<span class="badge rounded-pill bg-warning text-dark ms-2">${status}</span>`;
  return `<span class="badge rounded-pill bg-secondary ms-2">${status}</span>`;












  

}

