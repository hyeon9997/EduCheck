const data = JSON.parse(localStorage.getItem("resultData"));

const subjects = data.selected;
const resultText = data.resultText;

// 1️⃣ 조건 결과 출력
document.getElementById("summary").innerHTML = resultText;

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

  subjectDiv.innerHTML += `<h3>${g}학년 ${s}학기</h3>`;

  grouped[key].forEach(sub => {
    subjectDiv.innerHTML += `
      <div>- ${sub.name} (${sub.group}, ${sub.credit}학점)</div>
    `;
  });
}