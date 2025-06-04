let currentSlide = 0;
const slidesContainer = document.querySelector(".slides-container");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// 必ず container の幅とスライド幅も同じにする
slidesContainer.style.width = `${totalSlides * 100}%`;
slides.forEach(slide => {
  slide.style.width = `${100 / totalSlides}%`;
});

console.log("test05");




















function updateSlidePosition() {
  const offset = -currentSlide * (100 / totalSlides);
  slidesContainer.style.transform = `translateX(${offset}%)`;

  // ドットの active 切り替え
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlidePosition();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
}

// 初期表示
updateSlidePosition();

// ドット生成
const dotsContainer = document.querySelector(".dots-container");

for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => {
    currentSlide = i;
    updateSlidePosition();
  });
  dotsContainer.appendChild(dot);
}
