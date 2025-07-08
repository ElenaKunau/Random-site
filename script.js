const colors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF'];
const fonts = ['Arial', 'Verdana', 'Georgia', 'Courier New', 'Tahoma', 'Trebuchet MS'];
const titles = ['Добро пожаловать!', 'Привет, мир!', 'Это случайный сайт', 'Сюрприз!'];
const descriptions = [
  'Каждый раз что-то новенькое.',
  'Наслаждайтесь переменами.',
  'Мы любим разнообразие!',
  'Что будет дальше?'
];
const images = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg',
  'images/img4.jpg'
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function applyRandomStyle() {
  document.body.style.backgroundColor = getRandom(colors);
  document.body.style.fontFamily = getRandom(fonts);

  document.getElementById('title').textContent = getRandom(titles);
  document.getElementById('description').textContent = getRandom(descriptions);
  document.getElementById('random-image').src = getRandom(images);

  const container = document.getElementById('container');
  if (Math.random() > 0.5) {
    container.insertBefore(document.getElementById('image-section'), document.getElementById('text-section'));
  } else {
    container.insertBefore(document.getElementById('text-section'), document.getElementById('image-section'));
  }
}

applyRandomStyle();
