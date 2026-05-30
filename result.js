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
      <table class="subject-table">

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
    scale: 2
  });

  canvas.toBlob(async (blob) => {

    const file = new File(
      [blob],
      "course-result.png",
      { type: "image/png" }
    );

    try {
      if (navigator.canShare && navigator.canShare({ files: [file] })) {

        await navigator.share({
          title: "과목선택 결과",
          text: "나의 과목선택 결과",
          files: [file]
        });

      } else {
        alert("이 기기는 이미지 공유를 지원하지 않습니다.");
      }

    } catch (e) {
      console.log(e);
    }

  });
}
