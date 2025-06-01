const jobs = [
  {
    title: "Paralegal",
    type: "FULL-TIME",
    description: "A Paralegal closely works with the Organization’s Legal Counsel; performs legal research, drafting, and filing of legal documents."
  },
  {
    title: "Branch Accounting Assistant",
    type: "FULL-TIME",
    description: "We are looking for candidates with analytical skills. Handles preparation, recording, and summarizing financial transactions."
  },
  {
    title: "Account Officer",
    type: "FULL-TIME",
    description: "Responsible for implementing financial programs, and organizing community clients."
  }
];

const jobList = document.getElementById('jobList');

jobs.forEach(job => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h2>${job.type}</h2>
    <h3>${job.title}</h3>
    <p>${job.description}</p>
    <button>VIEW</button>
    <button style="background: #6610f2; color: white;">APPLY</button>
  `;
  jobList.appendChild(card);
});
