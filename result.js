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

    <div class="status">
      선택: ${grouped[key].length}과목
    </div>

    <div class="table-wrap">
      <table class="result-table">

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
html2canvas(document.getElementById("resultArea"))
  .then(canvas => {
    canvas.toBlob(blob => {
      const file = new File([blob], "result.png");

      navigator.share({
        files: [file],
        title: "과목선택 결과"
      });
    });
  });
async function shareResult() {

  const target = document.getElementById("resultArea");

  const canvas = await html2canvas(target, {
    scale: 2,
    useCORS: true
  });

  const link = document.createElement("a");

  link.download = "과목선택결과.png";
  link.href = canvas.toDataURL("image/png");

  document.body.appendChild(link);
  link.click();
  alert("이미지가 생성되었습니다. 다운로드가 안 되면 크롬 또는 삼성 인터넷에서 이용해주세요.");
  document.body.removeChild(link);

}
