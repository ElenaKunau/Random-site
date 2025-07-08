document.addEventListener("DOMContentLoaded", function () {
  const gradients = [
    "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "radial-gradient(circle at 20% 20%, #ff9a9e, #fad0c4)"
  ];

  const fonts = ["Arial", "Verdana", "Georgia", "Courier New", "Tahoma", "Trebuchet MS"];
  const titles = ["Ярко и смело!", "Минимализм рулит", "Градиент дня", "Рандомный стиль!", "Вдохновляйся!"];
  const descriptions = [
    "Каждая загрузка — новое вдохновение.",
    "Новый стиль. Новый взгляд.",
    "Генерируем красоту прямо в браузере.",
    "Арт начинается с неожиданности."
  ];
  const imagePaths = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg"];

  function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function applyRandomDesign() {
    const body = document.body;
    const title = document.getElementById("title");
    const desc = document.getElementById("description");
    const gallery = document.getElementById("image-gallery");
    const decorations = document.getElementById("decorations");

    if (!body || !title || !desc || !gallery || !decorations) return;

    const useDark = Math.random() < 0.25;
    if (useDark) {
      body.style.background = "#000000";
      body.style.color = "#ffffff";
    } else {
      body.style.background = getRandom(gradients);
      body.style.color = "#000000";
    }

    body.style.fontFamily = getRandom(fonts);
    title.textContent = getRandom(titles);
    desc.textContent = getRandom(descriptions);

    // images
    gallery.innerHTML = "";
    const numImages = randomInt(1, 3);
    const shuffled = [...imagePaths].sort(() => 0.5 - Math.random());
    for (let i = 0; i < numImages; i++) {
      const img = document.createElement("img");
      img.src = shuffled[i];
      img.alt = "Random";
      if (useDark) img.style.border = "2px solid white";
      gallery.appendChild(img);
    }

    // decorations
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
  }

  applyRandomDesign();
});
