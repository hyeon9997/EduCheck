// =======================
// 📌 과목 데이터 (샘플)
// =======================
const subjects = [
  { id: "S1", grade: 2, semester: 1, group: "수학", type:"진로", name: "인공지능 수학", credit: 3 },
  { id: "S2", grade: 2, semester: 1, group: "체육", type:"진로", name: "기초 체육 전공 실기", credit: 3 },
  { id: "S3", grade: 2, semester: 1, group: "기술·가정/정보", type:"일반", name: "기술·가정", credit: 3 },
  { id: "S4", grade: 2, semester: 1, group: "기술·가정/정보", type:"진로", name: "인공지능과 피지컬 컴퓨팅", credit: 3 },
  { id: "S5", grade: 2, semester: 1, group: "기술·가정/정보", type:"진로", name: "데이터 과학", credit: 3 },
  { id: "S6", grade: 2, semester: 1, group: "제2외국어/한문", type:"일반", name: "중국어", credit: 3 },
  { id: "S7", grade: 2, semester: 1, group: "제2외국어/한문", type:"일반", name: "일본어", credit: 3 },
  { id: "S8", grade: 2, semester: 1, group: "사회(역사/도덕 포함)", type:"일반", name: "세계사", credit: 3 },
  { id: "S9", grade: 2, semester: 1, group: "사회(역사/도덕 포함)", type:"진로", name: "정치", credit: 3 },
  { id: "S10", grade: 2, semester: 1, group: "사회(역사/도덕 포함)", type:"일반", name: "현대사회와 윤리", credit: 3 },
  { id: "S11", grade: 2, semester: 1, group: "사회(역사/도덕 포함)", type:"진로", name: "도시의 미래 탐구", credit: 3 },
  { id: "S12", grade: 2, semester: 1, group: "과학", type:"일반", name: "물리학", credit: 3 },
  { id: "S13", grade: 2, semester: 1, group: "과학", type:"일반", name: "화학", credit: 3 },
  { id: "S14", grade: 2, semester: 1, group: "과학", type:"일반", name: "생명과학", credit: 3 },
  { id: "S15", grade: 2, semester: 1, group: "과학", type:"일반", name: "지구과학", credit: 3 },
  
  { id: "S16", grade: 2, semester: 2, group: "수학", type:"진로", name: "기하", credit: 3 },
  { id: "S17", grade: 2, semester: 2, group: "체육", type:"진로", name: "심화 체육 전공 실기", credit: 3 },  
  { id: "S18", grade: 2, semester: 2, group: "기술·가정/정보", type:"융합", name: "소프트웨어와 생활", credit: 3 },  
  { id: "S19", grade: 2, semester: 2, group: "기술·가정/정보", type:"진로", name: "인공지능 기초", credit: 3 },  
  { id: "S20", grade: 2, semester: 2, group: "기술·가정/정보", type:"융합", name: "창의 공학 설계", credit: 3 },  
  { id: "S21", grade: 2, semester: 2, group: "제2외국어/한문", type:"융합", name: "중국 문화", credit: 3 },  
  { id: "S22", grade: 2, semester: 2, group: "제2외국어/한문", type:"융합", name: "일본 문화", credit: 3 },  
  { id: "S23", grade: 2, semester: 2, group: "사회(역사/도덕 포함)", type:"진로", name: "동아시아 역사 기행", credit: 3 },  
  { id: "S24", grade: 2, semester: 2, group: "사회(역사/도덕 포함)", type:"진로", name: "법과 사회", credit: 3 },  
  { id: "S25", grade: 2, semester: 2, group: "사회(역사/도덕 포함)", type:"융합", name: "여행지리", credit: 3 },  
  { id: "S26", grade: 2, semester: 2, group: "사회(역사/도덕 포함)", type:"융합", name: "윤리문제 탐구", credit: 3 },  
  { id: "S27", grade: 2, semester: 2, group: "과학", type:"진로", name: "역학과 에너지", credit: 3 },  
  { id: "S28", grade: 2, semester: 2, group: "과학", type:"진로", name: "물질과 에너지", credit: 3 },  
  { id: "S29", grade: 2, semester: 2, group: "과학", type:"진로", name: "세포와 물질대사", credit: 3 },  
  { id: "S30", grade: 2, semester: 2, group: "과학", type:"진로", name: "지구시스템과학", credit: 3 },

  { id: "S31", grade: 3, semester: 1, group: "국어", type:"진로", name: "주제 탐구 독서", credit: 3 },  
  { id: "S32", grade: 3, semester: 1, group: "수학", type:"진로", name: "미적분Ⅱ", credit: 3 },  
  { id: "S33", grade: 3, semester: 1, group: "영어", type:"융합", name: "미디어 영어", credit: 3 },  
  { id: "S34", grade: 3, semester: 1, group: "기술·가정/정보", type:"진로", name: "정보과학", credit: 3 },  
  { id: "S35", grade: 3, semester: 1, group: "사회(역사/도덕 포함)", type:"일반", name: "세계시민과 지리", credit: 3 },  
  { id: "S36", grade: 3, semester: 1, group: "사회(역사/도덕 포함)", type:"진로", name: "경제", credit: 3 },  
  { id: "S37", grade: 3, semester: 1, group: "사회(역사/도덕 포함)", type:"진로", name: "윤리와 사상", credit: 3 },  
  { id: "S38", grade: 3, semester: 1, group: "사회(역사/도덕 포함)", type:"융합", name: "역사로 탐구하는 현대 세계", credit: 3 },  
  { id: "S39", grade: 3, semester: 1, group: "사회(역사/도덕 포함)", type:"융합", name: "사회문제 탐구", credit: 3 },  
  { id: "S40", grade: 3, semester: 1, group: "교양", type:"진로", name: "인간과 철학", credit: 3 },  
  { id: "S41", grade: 3, semester: 1, group: "교양", type:"진로", name: "인간과 심리", credit: 3 },  
  { id: "S42", grade: 3, semester: 1, group: "과학", type:"진로", name: "전자기와 양자", credit: 3 },  
  { id: "S43", grade: 3, semester: 1, group: "과학", type:"진로", name: "화학 반응의 세계", credit: 3 },  
  { id: "S44", grade: 3, semester: 1, group: "과학", type:"진로", name: "생물의 유전", credit: 3 },  
  { id: "S45", grade: 3, semester: 1, group: "과학", type:"진로", name: "행성우주과학", credit: 3 },  

  { id: "S46", grade: 3, semester: 2, group: "사회(역사/도덕 포함)", type:"진로", name: "인문학과 윤리", credit: 3 },  
  { id: "S47", grade: 3, semester: 2, group: "사회(역사/도덕 포함)", type:"융합", name: "금융과 경제생활", credit: 3 }, 
  { id: "S48", grade: 3, semester: 2, group: "사회(역사/도덕 포함)", type:"융합", name: "기후변화와 지속가능한 세계", credit: 3 }, 
  { id: "S49", grade: 3, semester: 2, group: "교양", type:"진로", name: "논리와 사고", credit: 3 }, 
  { id: "S50", grade: 3, semester: 2, group: "교양", type:"진로", name: "교육의 이해", credit: 3 }, 
  { id: "S51", grade: 3, semester: 2, group: "교양", type:"진로", name: "인문학적 감성과 역사 이해", credit: 3 }, 
  { id: "S52", grade: 3, semester: 2, group: "과학", type:"융합", name: "과학의 역사와 문화", credit: 3 }, 
  { id: "S53", grade: 3, semester: 2, group: "과학", type:"융합", name: "기후변화와 환경생태", credit: 3 }, 
  { id: "S54", grade: 3, semester: 2, group: "과학", type:"융합", name: "융합과학 탐구", credit: 3 }, 
  { id: "S55", grade: 3, semester: 2, group: "기술·가정/정보", type:"진로", name: "사물인터넷", credit: 3 }, 

];

// =======================
// 📌 규칙
// =======================
const selectionRules = [
  { grade: 2, semester: 1, count: 5 },
  { grade: 2, semester: 2, count: 5 },
  { grade: 3, semester: 1, count: 4 },
  { grade: 3, semester: 2, count: 4 }
];

const prerequisites = {
  "역학과 에너지": ["물리학"],
  "전자기와 양자": ["물리학"],
  "물질과 에너지": ["화학"],
  "화학 반응의 세계": ["화학"],
  "세포와 물질대사": ["생명과학"],
  "생물의 유전": ["생명과학"],
  "지구시스템과학": ["지구과학"],
  "행성우주과학": ["지구과학"],
};

const targetGroups = ["기술·가정/정보", "제2외국어/한문", "교양"];
const minGroupCredit = 10; //정보, 한문 1학기 필수 이수

// =======================
// 🎨 UI 생성
// =======================
function render() {
  const container = document.getElementById("container");

  selectionRules.forEach(rule => {

    const termDiv = document.createElement("div");
    termDiv.className = "term";

    // 제목
    const title = document.createElement("h2");
    title.innerText = `${rule.grade}학년 ${rule.semester}학기 (택 ${rule.count})`;
    termDiv.appendChild(title);

    // 상태 표시
    const status = document.createElement("div");
    status.id = `status-${rule.grade}-${rule.semester}`;
    status.className = "status";
    status.innerText = `선택: 0/${rule.count}`;
    termDiv.appendChild(status);

    // 과목 필터
    const filtered = subjects.filter(
      s => s.grade === rule.grade &&
           s.semester === rule.semester
    );

    // ======================
    // 📋 테이블 생성
    // ======================

    const table = document.createElement("table");
    table.className = "subject-table";

    table.innerHTML = `
      <thead>
        <tr>
          <th>선택</th>
          <th>교과군</th>
          <th>과목명</th>
          <th>유형</th>
          <th>학점</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;

    const tbody = table.querySelector("tbody");

    filtered.forEach(sub => {

      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>
          <input
            type="checkbox"
            value="${sub.id}"
            onchange="updateStatus(${rule.grade}, ${rule.semester})"
          >
        </td>
        <td>${sub.group}</td>
        <td>${sub.name}</td>
        <td>${sub.type}</td>
        <td>${sub.credit}</td>
      `;

      tbody.appendChild(tr);

    });

    termDiv.appendChild(table);

    container.appendChild(termDiv);

  });
}

// =======================
// 🔍 검사
// =======================

// 상태 업데이트 함수
function updateStatus(grade, semester) {
  const rule = selectionRules.find(
    r => r.grade === grade && r.semester === semester
  );

  const checked = [...document.querySelectorAll("input:checked")]
    .map(el => el.value);

  const selected = subjects.filter(s =>
    checked.includes(s.id) &&
    s.grade === grade &&
    s.semester === semester
  );

  const count = selected.length;

  const statusDiv = document.getElementById(`status-${grade}-${semester}`);

  statusDiv.className = "status";

if (count === rule.count) {
  statusDiv.innerHTML = `✅ 선택 완료 (${count}/${rule.count})`;
  statusDiv.style.color = "#16a34a";
} else if (count > rule.count) {
  statusDiv.innerHTML = `❌ 초과 (${count}/${rule.count})`;
  statusDiv.style.color = "#dc2626";
} else {
  statusDiv.innerHTML = `⚠️ 부족 (${count}/${rule.count})`;
  statusDiv.style.color = "#f59e0b";
}
}



function checkPrerequisites(selectedSubjects) {
  let result = "";

  const selectedNames = selectedSubjects.map(s => s.name);

  let fail = false;

  selectedSubjects.forEach(sub => {
    const prereq = prerequisites[sub.name];

    if (prereq) {
      prereq.forEach(req => {
        if (!selectedNames.includes(req)) {
          result += `❌ ${sub.name} → 선수과목 ${req} 필요<br>`;
          fail = true;
        }
      });
    }
  });

  if (!fail) {
    result += "✅ 선수과목 조건 충족<br>";
  }

  return result;
}

function checkSelectionCount(selectedSubjects) {
  let result = "";

  selectionRules.forEach(rule => {
    const count = selectedSubjects.filter(
      s => s.grade === rule.grade && s.semester === rule.semester
    ).length;

    if (count === rule.count) {
      result += `✅ ${rule.grade}학년 ${rule.semester}학기 (${count}/${rule.count}) 충족<br>`;
    } else if (count > rule.count) {
      result += `❌ ${rule.grade}학년 ${rule.semester}학기 초과 (${count}/${rule.count})<br>`;
    } else {
      result += `❌ ${rule.grade}학년 ${rule.semester}학기 부족 (${count}/${rule.count})<br>`;
    }
  });

  return result;
}

function checkGroupCredit_minor(selectedSubjects) {
  const targetGroups = ["기술·가정/정보", "제2외국어/한문", "교양"];

  let selected_total = 6;

  selectedSubjects.forEach(sub => {
    if (targetGroups.includes(sub.group)) {
      selected_total += Number(sub.credit);
    }
  });

  if (selected_total >= 16) {
    return `✅ 기술·가정/정보, 제2외국어/한문, 교양 교과(군) 학점 충족<br>`;
  } else {
    return `❌ 기술·가정/정보, 제2외국어/한문, 교양 교과(군) ${10-selected_total}학점 부족<br>`;
  }
}

function goResult() {
  const checkedIds = [...document.querySelectorAll("input:checked")]
    .map(el => el.value);

  const selectedSubjects = subjects.filter(s =>
    checkedIds.includes(s.id)
  );

  // ✅ 여기서 모든 검사 실행
  let resultText = "";

  resultText += checkSelectionCount(selectedSubjects);
  resultText += checkGroupCredit_minor(selectedSubjects);
  resultText += checkPrerequisites(selectedSubjects);


  // 📦 결과 + 선택 데이터 같이 저장
  const resultData = {
    selected: selectedSubjects,
    resultText: resultText
  };

  localStorage.setItem("resultData", JSON.stringify(resultData));

  // 이동
  window.location.href = "result.html";
}

window.onload = function() {
  render();
};
