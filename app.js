/* THIS WHOLE CODE IS WRITTEN BY THENICKS */
// === FIREBASE SETUP ===
const firebaseConfig = {
  apiKey: "AIzaSyC3x0XyfOqtdlhlaHLkS3PGBrt7-tAcH3g",
  authDomain: "hahaha121345.firebaseapp.com",
  projectId: "hahaha121345",
  storageBucket: "hahaha121345.firebasestorage.app",
  messagingSenderId: "794382219849",
  appId: "1:794382219849:web:5701a4ddf5cdaef8629d98",
  measurementId: "G-76PM1P96XT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();


const STORAGE_KEY = "niceornot_v3_state";
const OWNER_PASSWORD = "thenicks11235"; // secret unlock & reset password

// === Celebrity list ===
let celebs = [
  { name: "Dalton", img: "https://images.squarespace-cdn.com/content/v1/65bc10e4039a0d6571e24690/e7b70a3a-6cad-425a-b128-a6e5a33f2bc9/21k098-is-98-the-bay-academy-for-the-arts-and-sciences-1259.jpg" },
  { name: "D'Agosta", img: "https://images.squarespace-cdn.com/content/v1/65bc10e4039a0d6571e24690/5881288c-4612-4a96-9e40-1c9478fd27a0/image0+%281%29.jpeg" },
  { name: "O'Neill", img: "https://images.squarespace-cdn.com/content/v1/65bc10e4039a0d6571e24690/56a33894-8bd7-4511-acb6-1738570d4347/Mr.+Oneil.png" },
  { name: "Vero-Kipp", img: "https://images.squarespace-cdn.com/content/v1/65bc10e4039a0d6571e24690/f5c78bb1-a551-4d33-a2b4-510f5aed1f1c/21k098-is-98-the-bay-academy-for-the-arts-and-sciences-1147.jpg" },
  { name: "Goldberg", img: "https://images.squarespace-cdn.com/content/v1/65bc10e4039a0d6571e24690/31bddf45-86d8-4b9e-afcc-fc3445b9ac69/Mr.+Goldberg.png" },
  { name: "Hunt", img: "https://images.squarespace-cdn.com/content/v1/65bc10e4039a0d6571e24690/0fdc29e3-5963-4867-8d00-e59cdc171102/21k098-is-98-the-bay-academy-for-the-arts-and-sciences-1276.jpg" },
  { name: "Carlino", img: "https://images.squarespace-cdn.com/content/v1/65bc10e4039a0d6571e24690/b829f0b6-e391-4756-95d5-b78f5b92d0bb/21k098-is-98-the-bay-academy-for-the-arts-and-sciences-1261.jpg" },
  { name: "Abrenica", img: "https://images.squarespace-cdn.com/content/v1/65bc10e4039a0d6571e24690/c7763fa7-432c-43cd-98c1-1f5a98d2b98a/Mr.+Abrenica.jpg" },
  { name: "Afonso", img: "https://images.squarespace-cdn.com/content/v1/65bc10e4039a0d6571e24690/cb218f42-4c60-4726-ad5c-dafceb1bb753/21k098-is-98-the-bay-academy-for-the-arts-and-sciences-1151.jpg" },
  { name: "Agola", img: "https://images.squarespace-cdn.com/content/v1/65bc10e4039a0d6571e24690/ddbc4629-3c8c-4030-80b1-e04238a74d2e/21k098-is-98-the-bay-academy-for-the-arts-and-sciences-1278.jpg" },
  { name: "Airo", img: "https://images.squarespace-cdn.com/content/v1/65bc10e4039a0d6571e24690/d54d0682-546e-4bd4-a31d-1f89cf4c2e79/9.png" },
  { name: "Melendez", img: "https://images.squarespace-cdn.com/content/v1/65bc10e4039a0d6571e24690/1acd8e0f-cc11-489f-8e39-fbf8cf559abc/Ms.+Alkabbani.png" },
  { name: "Bommarito", img: "https://images.squarespace-cdn.com/content/v1/65bc10e4039a0d6571e24690/290d2669-22b9-4c66-bbd2-424e9394b4e2/21k098-is-98-the-bay-academy-for-the-arts-and-sciences-1279.jpg" },
  { name: "Comas", img: "https://images.squarespace-cdn.com/content/v1/65bc10e4039a0d6571e24690/e19d2abc-966a-4332-9339-90eb1e721282/Ms.+Comas.jpg" },
  { name: "Curen", img: "https://images.squarespace-cdn.com/content/v1/65bc10e4039a0d6571e24690/4a9ecf72-0112-4297-ac5e-e6e6dd26c367/21k098-is-98-the-bay-academy-for-the-arts-and-sciences-1190.jpg" },
  { name: "Deveney", img: "https://images.squarespace-cdn.com/content/v1/65bc10e4039a0d6571e24690/04d7ff0a-90c5-4802-b89b-25712a64c84f/21k098-is-98-the-bay-academy-for-the-arts-and-sciences-1135.jpg" },
  { name: "Devivio", img: "https://images.squarespace-cdn.com/content/v1/65bc10e4039a0d6571e24690/04d7ff0a-90c5-4802-b89b-25712a64c84f/21k098-is-98-the-bay-academy-for-the-arts-and-sciences-1135.jpg" },
  { name: "Durrani", img: "https://images.squarespace-cdn.com/content/v1/65bc10e4039a0d6571e24690/f5e6f7a2-e68e-4f25-90fd-57c1d2be50e7/21k098-is-98-the-bay-academy-for-the-arts-and-sciences-1187.jpg" },
  { name: "Failla", img: "https://images.squarespace-cdn.com/content/v1/65bc10e4039a0d6571e24690/36eb9c9b-f01f-42aa-ac00-e439ea9267e3/4+%281%29.png" },
  { name: "Funk", img: "https://images.squarespace-cdn.com/content/v1/65bc10e4039a0d6571e24690/a88340b1-cf0e-4351-a5f7-228e518546ab/21k098-is-98-the-bay-academy-for-the-arts-and-sciences-1137.jpg" },
  { name: "Giambra", img: "https://images.squarespace-cdn.com/content/v1/65bc10e4039a0d6571e24690/0b58ca18-5e8d-440a-bc97-1c7a3b31e982/21k098-is-98-the-bay-academy-for-the-arts-and-sciences-1224.jpg" }
];

// Shuffle order
celebs = celebs.sort(() => Math.random() - 0.5);

let index = 0;
let stats = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
let secretBuffer = "";

const img = document.getElementById("img");
const nameEl = document.getElementById("name");
const btnNice = document.getElementById("btnNice");
const btnNot = document.getElementById("btnNot");
const resultsSection = document.getElementById("resultsSection");
const rateSection = document.getElementById("rateSection");
const resultList = document.getElementById("resultList");
const showResultsBtn = document.getElementById("showResultsBtn");
const backBtn = document.getElementById("backBtn");
const resetBtn = document.getElementById("resetBtn");
const ownerBadge = document.getElementById("ownerBadge");

resetBtn.style.display = "none"; // hidden until unlocked

function showNext() {
  const c = celebs[index];
  img.src = c.img;
  nameEl.textContent = c.name;
}
// === Celebrity list ===
async function rate(isNice) {
  const celeb = celebs[index];
  const name = celeb.name;

  // Save locally
  if (!stats[name]) stats[name] = { nice: 0, not: 0 };
  if (isNice) stats[name].nice++;
  else stats[name].not++;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));

  // Save to Firestore (shared votes)
  try {
    const ref = db.collection("votes").doc(name);
    await db.runTransaction(async (t) => {
      const doc = await t.get(ref);
      const data = doc.exists ? doc.data() : { nice: 0, not: 0 };
      if (isNice) data.nice++;
      else data.not++;
      t.set(ref, data);
    });
  } catch (err) {
    console.error("❌ Firestore save error:", err);
  }

  index = (index + 1) % celebs.length;
  showNext();
}


async function renderResults() {
  resultList.innerHTML = "<p>Loading...</p>";

  const snapshot = await db.collection("votes").get();
  const arr = [];

  snapshot.forEach(doc => {
    const { nice, not } = doc.data();
    const total = nice + not;
    const percent = total ? Math.round((nice / total) * 100) : 0;
    const celeb = celebs.find(c => c.name === doc.id);
    arr.push({ name: doc.id, percent, nice, not, img: celeb ? celeb.img : "" });
  });

  arr.sort((a, b) => b.percent - a.percent);
  resultList.innerHTML = "";

  arr.forEach((c, i) => {
    const div = document.createElement("div");
    div.className = "result-item";
    div.innerHTML = `
      <img src="${c.img}" alt="">
      <div class="meta">
        <strong>${i + 1}. ${c.name}</strong>
        <small>${c.percent}% Nice (${c.nice} 👍, ${c.not} ❌)</small>
      </div>
    `;
    resultList.appendChild(div);
  });
}


// 🔒 Reset All Votes (protected)
function resetAll() {
  const pass = prompt("Enter owner password to reset all votes:");
  if (pass === OWNER_PASSWORD) {
    if (confirm("Are you sure you want to reset everything?")) {
      localStorage.removeItem(STORAGE_KEY);
      stats = {};
      celebs = celebs.sort(() => Math.random() - 0.5);
      alert("✅ All votes reset successfully!");
      renderResults();
    }
  } else if (pass) {
    alert("❌ Incorrect password. Only Nick can reset.");
  }
}

// 🧠 Secret unlock listener
window.addEventListener("keydown", e => {
  secretBuffer += e.key.toLowerCase();
  if (secretBuffer.includes(OWNER_PASSWORD.toLowerCase())) {
    alert("🔓 Owner mode activated g  ood boyyy!");
    resetBtn.style.display = "inline-block";
    ownerBadge.style.display = "block";
    secretBuffer = "";
  }
  if (secretBuffer.length > 20) secretBuffer = secretBuffer.slice(-20);
});

btnNice.addEventListener("click", () => rate(true));
btnNot.addEventListener("click", () => rate(false));
showResultsBtn.addEventListener("click", () => {
  renderResults();
  rateSection.style.display = "none";
  resultsSection.style.display = "block";
});
backBtn.addEventListener("click", () => {
  resultsSection.style.display = "none";
  rateSection.style.display = "block";
});
// === SWIPE GESTURES ===
let touchStartX = 0;
let touchEndX = 0;

const card = document.getElementById("card");

card.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].screenX;
});

card.addEventListener("touchend", e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const diff = touchEndX - touchStartX;
  if (Math.abs(diff) < 50) return; // ignore small swipes

  if (diff > 50) {
    // swipe right = Nice
    rate(true);
    flashFeedback("👍 NICE!", "#10b981");
  } else if (diff < -50) {
    // swipe left = Not
    rate(false);
    flashFeedback("❌ NOT", "#ef4444");
  }
}

function flashFeedback(text, color) {
  const flash = document.createElement("div");
  flash.textContent = text;
  flash.style.position = "fixed";
  flash.style.top = "40%";
  flash.style.left = "50%";
  flash.style.transform = "translate(-50%, -50%)";
  flash.style.fontSize = "40px";
  flash.style.fontWeight = "800";
  flash.style.color = color;
  flash.style.opacity = "0.9";
  flash.style.transition = "opacity 0.6s ease";
  flash.style.zIndex = "2000";
  document.body.appendChild(flash);
  setTimeout(() => (flash.style.opacity = "0"), 400);
  setTimeout(() => flash.remove(), 1000);
}
resetBtn.addEventListener("click", resetAll);
document.addEventListener("DOMContentLoaded", showNext);
