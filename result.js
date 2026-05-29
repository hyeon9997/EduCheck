const data = JSON.parse(localStorage.getItem("resultData"));
console.log("data:", data);
const subjects = data.selected;
const resultText = data.resultText;

// 1️⃣ 조건 결과 출력
document.getElementById("summary").innerHTML = data.resultText;

// 2️⃣ 학기별 과목 정리
const grouped = {};

subjects.forEach(s => {
  const key = `${s.grade}-${s.semester}`;
  if (!grouped[key]) grouped[key] = [];
  grouped[key].push(s);
});

// 3️⃣ 과목 출력
const subjectDiv = document.getElementById("subjectList");

for (let key in grouped) {
  const [g, s] = key.split("-");

  subjectDiv.innerHTML += `
    <h3>${g}학년 ${s}학기</h3>

    <table class="result-table">
      <thead>
        <tr>
          <th>교과군</th>
          <th>과목명</th>
          <th>유형</th>
          <th>학점</th>
        </tr>
      </thead>
      <tbody id="tbody-${key}"></tbody>
    </table>
  `;

  const tbody = document.getElementById(`tbody-${key}`);

  grouped[key].forEach(sub => {
    tbody.innerHTML += `
      <tr>
        <td>${sub.group}</td>
        <td>${sub.name}</td>
        <td>${sub.type}</td>
        <td>${sub.credit}</td>
      </tr>
    `;
  });
}
