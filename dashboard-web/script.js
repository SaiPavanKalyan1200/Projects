const members = [
  { name: "Abhitha Duddu", id: "APPS135", P: 3, Weekend: 2, WFH: 0, CL: 0, SL: 0, ML: 0, PL: 0, LWP: 0, Remote: 0, CO: 0 },
  { name: "Anil Kumar Adada", id: "APPS136", P: 0, Weekend: 3, WFH: 11, CL: 0, SL: 2, ML: 0, PL: 0, LWP: 0, Remote: 0, CO: 0 },
  { name: "Karthik Enumarthi", id: "APPS144", P: 3, Weekend: 0, WFH: 10, CL: 0, SL: 0, ML: 0, PL: 0, LWP: 0, Remote: 0, CO: 0 },
  { name: "Harsh Gupta", id: "APPS155", P: 8, Weekend: 0, WFH: 5, CL: 5, SL: 0, ML: 0, PL: 0, LWP: 0, Remote: 0, CO: 0 },
  { name: "Akhila Pagadala", id: "APPS161", P: 9, Weekend: 0, WFH: 2, CL: 0, SL: 0, ML: 0, PL: 0, LWP: 0, Remote: 0, CO: 0 }
];

const memberList = document.getElementById("memberList");
const memberSearch = document.getElementById("memberSearch");
const title = document.getElementById("selectedMemberTitle");
const tbody = document.getElementById("detailsTableBody");

let selected = members[0];

const barChart = new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: ["P", "Weekend"],
    datasets: [{
      data: [selected.P, selected.Weekend],
      backgroundColor: ["#4caf50", "#9e9e9e"]
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
  }
});

const pieChart = new Chart(document.getElementById("pieChart"), {
  type: "pie",
  data: {
    labels: ["P", "Weekend"],
    datasets: [{
      data: [selected.P, selected.Weekend],
      backgroundColor: ["#4caf50", "#9e9e9e"]
    }]
  },
  options: {
    plugins: {
      legend: { position: "right" }
    }
  }
});

function renderMembers(list = members) {
  memberList.innerHTML = "";
  list.forEach((person) => {
    const li = document.createElement("li");
    li.textContent = person.name;
    if (person.id === selected.id) li.classList.add("active");
    li.addEventListener("click", () => {
      selected = person;
      updateCharts();
      renderMembers(filterMembers(memberSearch.value));
    });
    memberList.appendChild(li);
  });
}

function filterMembers(text) {
  const query = text.trim().toLowerCase();
  if (!query) return members;
  return members.filter((m) => m.name.toLowerCase().includes(query));
}

function updateCharts() {
  title.textContent = `${selected.name} - ${selected.id}`;
  barChart.data.datasets[0].data = [selected.P, selected.Weekend];
  pieChart.data.datasets[0].data = [selected.P, selected.Weekend];
  barChart.update();
  pieChart.update();
}

function renderTable() {
  tbody.innerHTML = "";
  members.forEach((m) => {
    const total = m.WFH + m.CL + m.SL + m.ML + m.PL + m.LWP + m.CO + m.P + m.Remote;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${m.name}</td>
      <td>${m.WFH}</td>
      <td>${m.CL}</td>
      <td>${m.SL}</td>
      <td>${m.ML}</td>
      <td>${m.PL}</td>
      <td>${m.LWP}</td>
      <td>${m.CO}</td>
      <td>${m.P}</td>
      <td>${m.Remote}</td>
      <td>${total}</td>
    `;
    tbody.appendChild(tr);
  });
}

memberSearch.addEventListener("input", () => {
  renderMembers(filterMembers(memberSearch.value));
});

document.getElementById("btnSummary").addEventListener("click", () => {
  document.getElementById("summaryView").classList.remove("hidden");
  document.getElementById("detailsView").classList.add("hidden");
  document.getElementById("btnSummary").classList.add("active");
  document.getElementById("btnDetails").classList.remove("active");
});

document.getElementById("btnDetails").addEventListener("click", () => {
  document.getElementById("detailsView").classList.remove("hidden");
  document.getElementById("summaryView").classList.add("hidden");
  document.getElementById("btnDetails").classList.add("active");
  document.getElementById("btnSummary").classList.remove("active");
});

renderMembers();
renderTable();
updateCharts();
