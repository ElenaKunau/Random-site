const gradients = [
  "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
  "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "radial-gradient(circle at 20% 20%, #ff9a9e, #fad0c4)",
];

const titles = ["Ярко и смело!", "Минимализм рулит", "Градиент дня", "Рандомный стиль!", "Вдохновляйся!"];
const descriptions = [
  "Каждая загрузка — новое вдохновение.",
  "Новый стиль. Новый взгляд.",
  "Генерируем красоту прямо в браузере.",
  "Арт начинается с неожиданности.",
];

const imagePaths = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg"];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function applyRandomDesign() {
  document.body.style.background = getRandom(gradients);
  document.getElementById("title").textContent = getRandom(titles);
  document.getElementById("description").textContent = getRandom(descriptions);
  document.body.style.fontFamily = getRandom(["Arial", "Verdana", "Georgia", "Courier New", "Montserrat", "Roboto"]);

  const gallery = document.getElementById("image-gallery");
  gallery.innerHTML = "";
  const numImages = randomInt(1, 3);
  const shuffled = imagePaths.sort(() => 0.5 - Math.random());
  for (let i = 0; i < numImages; i++) {
    const img = document.createElement("img");
    img.src = shuffled[i];
    gallery.appendChild(img);
  }

  const decorations = document.getElementById("decorations");
  decorations.innerHTML = "";
  const numDecor = randomInt(2, 5);
  for (let i = 0; i < numDecor; i++) {
    const circle = document.createElement("div");
    circle.style.position = "absolute";
    circle.style.borderRadius = "50%";
    circle.style.width = circle.style.height = randomInt(100, 300) + "px";
    circle.style.top = randomInt(0, 90) + "vh";
    circle.style.left = randomInt(0, 90) + "vw";
    circle.style.background = getRandom(gradients);
    circle.style.opacity = 0.3;
    circle.style.zIndex = "-1";
    decorations.appendChild(circle);
  }
}

applyRandomDesign();

  }

  const decorations = document.getElementById("decorations");
  decorations.innerHTML = "";
  const numDecor = randomInt(2, 5);
  for (let i = 0; i < numDecor; i++) {
    const circle = document.createElement("div");
    circle.style.width = circle.style.height = randomInt(100, 250) + "px";
    circle.style.top = randomInt(0, 90) + "vh";
    circle.style.left = randomInt(0, 90) + "vw";
    circle.style.background = getRandom(gradients);
    decorations.appendChild(circle);
  }

  // Одна из версий с черным фоном
  if (Math.random() < 0.25) {
    document.body.style.background = "#000000";
    document.body.style.color = "#ffffff";
    document.querySelectorAll("img").forEach(img => {
      img.style.border = "2px solid white";
    });
  }
}

applyRandomDesign();
