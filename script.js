const form = document.getElementById("courseForm");
const tableBody = document.getElementById("courseTableBody");
const gpaValue = document.getElementById("gpaValue");

let courses = [];

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page from reload

  const name = document.getElementById("courseName").value;
  const credits = parseFloat(document.getElementById("courseCredits").value);
  const grade = parseFloat(document.getElementById("courseGrade").value);

  courses.push({ name, credits, grade });
  
  updateTable();
  updateGPA();

  form.reset(); // clear inputs
});

function updateTable() {
  tableBody.innerHTML = "";
  courses.forEach((course) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="py-1">${course.name}</td>
      <td>${course.credits}</td>
      <td>${course.grade}</td>
    `;
    tableBody.appendChild(row);
  });
}

function updateGPA() {
    
  let totalPoints = 0;
  let totalCredits = 0;

  courses.forEach((course) => {
    totalPoints += course.grade * course.credits;
    totalCredits += course.credits;
  });

  const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
  gpaValue.textContent = gpa.toFixed(2);
}
