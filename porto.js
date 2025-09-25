const photo = document.querySelector(".hero-photo");

let position = 0;     // posisi awal
let direction = 1;    // arah gerak (1 = naik, -1 = turun)

function floatEffect() {
  // atur posisi Y
  position += 0.3 * direction;  

  // kalau sudah naik 15px → balik arah turun
  if (position >= 15) direction = -1;

  // kalau sudah turun 0px → balik arah naik
  if (position <= 0) direction = 1;

  // terapkan transform
  photo.style.transform = `translateY(-${position}px)`;

  // panggil lagi biar animasi jalan terus
  requestAnimationFrame(floatEffect);
}

// jalankan animasi
floatEffect();

const navLinks = document.querySelectorAll("nav a");

document.addEventListener("mousemove", (e) => {
  navLinks.forEach(link => {
    // dapatkan posisi tengah link
    const rect = link.getBoundingClientRect();
    const linkX = rect.left + rect.width / 2;
    const linkY = rect.top + rect.height / 2;

    // jarak dari cursor ke link
    const dx = e.clientX - linkX;
    const dy = e.clientY - linkY;
    const distance = Math.sqrt(dx*dx + dy*dy);

    // maksimal jarak agar efek terasa (misal 100px)
    const maxDist = 100;
    if(distance < maxDist){
      // semakin dekat cursor, link terangkat lebih tinggi
      const lift = (1 - distance / maxDist) * 10; // maksimal 10px
      link.style.transform = `translateY(-${lift}px)`;
      link.style.transition = "transform 0.1s ease";
    } else {
      link.style.transform = "translateY(0)";
      link.style.transition = "transform 0.3s ease";
    }
  });
});
