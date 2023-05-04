const data = [
  {
    "name": "尹相志",
    "topic": "ChatGPT 的七宗罪 – 我如何使用 ChatGPT 為偵探小說取材",
    "Company Name": "DataDecision.ai",
    "Job Title": "數據科學家",
    "title": "DataDecision.ai／數據科學家"
  },
  {
    "name": "張志祺",
    "topic": "公司導入 AI：大規模賜福的實務心得",
    "Company Name": "簡訊設計",
    "Job Title": "共同創辦人",
    "title": "簡訊設計／共同創辦人"
  },
  {
    "name": "林煒勛",
    "topic": "『打造全體員工AI思維』",
    "Company Name": "AmazingTalker",
    "Job Title": "AI Team Leader",
    "title": "AmazingTalker／AI Team Leader"
  },
  {
    "name": "王鵬傑",
    "topic": "ChatGPT 實戰課：利用不同資料源打造創新產品",
    "Company Name": "ExplainThis",
    "Job Title": "Co-Founder",
    "title": "ExplainThis／Co-Founder"
  },
  {
    "name": "陳照元",
    "topic": "Enterprise Prompt Engineering",
    "Company Name": "玉山銀行",
    "Job Title": "主任機器學習工程師",
    "title": "玉山銀行／主任機器學習工程師"
  },
  {
    "name": "侯宜秀",
    "topic": "通往未來的指引：人機協作時代，我們需要什麼樣的規範？",
    "Company Name": "台灣人工智慧學校基金會",
    "Job Title": "秘書長",
    "title": "台灣人工智慧學校基金會／秘書長"
  },
  {
    "name": "Tammy Yang",
    "topic": "Make AI responsible",
    "Company Name": "Numbers Protocol",
    "Job Title": "Founder",
    "title": "Numbers Protocol／Founder"
  },
  {
    "name": "林穎俊",
    "topic": "如何問出更好的問題？AI世代師生都必須面對的挑戰",
    "Company Name": "宜蘭中山國小",
    "Job Title": "資訊組長",
    "title": "宜蘭中山國小／資訊組長"
  },
  {
    "name": "何明政",
    "topic": "我的 AI 代理人 – 我可以不用上班了嗎？",
    "Company Name": "iCHEF",
    "Job Title": "共同創辦人",
    "title": "iCHEF／共同創辦人"
  },
  {
    "name": "葛如鈞",
    "topic": "舌尖上的 AI：生成式智慧打造餐飲欣智能",
    "Company Name": "國立臺灣大學資訊網路與多媒體研究所",
    "Job Title": "兼任助理教授",
    "title": "國立臺灣大學資訊網路與多媒體研究所／兼任助理教授"
  },
  {
    "name": "陳易昇",
    "topic": "NVIDIA Omniverse 如何透過客製化工作流與 AI 加速創作",
    "Company Name": "NVIDIA",
    "Job Title": "資深經理",
    "title": "NVIDIA／資深經理"
  },
  {
    "name": "高捷",
    "topic": "AI圖像生成，創造動態的敘事創作。",
    "Company Name": "實踐大學媒體傳達設計學系",
    "Job Title": "兼任講師",
    "title": "實踐大學媒體傳達設計學系／兼任講師"
  },
  {
    "name": "李慕約",
    "topic": "商用詠唱進階 & 黑魔法防禦術 - 提升與保護你的 AI 應用",
    "Company Name": "李慕約有限公司",
    "Job Title": "負責人",
    "title": "李慕約有限公司／負責人"
  },
  {
    "name": "李怡志",
    "topic": "誰說生成工具會扼殺創意？",
    "Company Name": "政大新聞系",
    "Job Title": "助理教授",
    "title": "政大新聞系／助理教授"
  },
  {
    "name": "Generative AI 年會",
    "topic": "面對撲面而來的AI巨浪，唯有人類的相互合作，才能跑得比AI還快",
    "Company Name": "",
    "Job Title": "",
    "title": "2023 Generative AI 年會製作委員會"
  },
]

const searchParams = new URLSearchParams(window.location.search);
const currentSpeaker = searchParams.get("speaker");
const currentSpeakerData = data[currentSpeaker];
const subjectDom = document.getElementById("subject");
const avatarDom = document.getElementById("avatar");
let text = currentSpeakerData.name + "／" + currentSpeakerData.topic;
let i = 0;
let j = 0;
function typeWriter() {
  if (i < text.length) {
    subjectDom.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 30);
  } else {
    drawAvatar();
  }
}

function drawAvatar() {
  avatarDom.style['background-image'] = "url('assets/speakers/" + currentSpeakerData.name + ".jpg')";
  if (j < 5) {
    if(j == 4) {
      document.querySelector("#avatarbox img").style['display'] = "none";
    }
    avatarDom.style['filter'] = "blur(" + (4 - j) * 7 + "px)";
    j++;
    setTimeout(drawAvatar, 500);
  }
}

avatarDom.style['background-image'] = "url()";
subjectDom.innerHTML = "";

window.addEventListener('obsSceneChanged', function (event) {
  setTimeout(typeWriter, 500);
})
