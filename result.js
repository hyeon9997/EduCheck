const data = JSON.parse(localStorage.getItem("resultData"));

const subjects = data.selected;
const resultText = data.resultText;

// 결과 출력
document.getElementById("summary").innerHTML = resultText;

// 학기별 그룹화
const grouped = {};

subjects.forEach(s => {
  const key = `${s.grade}-${s.semester}`;

  if (!grouped[key]) {
    grouped[key] = [];
  }

  grouped[key].push(s);
});

const subjectDiv = document.getElementById("subjectList");

// 학기 순서 정렬
const orderedKeys = Object.keys(grouped).sort();

orderedKeys.forEach(key => {

  const [g, s] = key.split("-");

  subjectDiv.innerHTML += `

    <div class="term">

      <h2>${g}학년 ${s}학기</h2>

      <div class="table-wrap">

        <table class="subject-table result-table">

          <thead>
            <tr>
              <th>교과군</th>
              <th>과목명</th>
              <th>유형</th>
              <th>학점</th>
            </tr>
          </thead>

          <tbody id="tbody-${key}">
          </tbody>

        </table>

      </div>

    </div>
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

});
