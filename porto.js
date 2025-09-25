const photo = document.querySelector(".hero-photo");

let position = 0;     
let direction = 1;

function floatEffect() {
  position += 0.3 * direction;  

  if (position >= 15) direction = -1;

  if (position <= 0) direction = 1;

  photo.style.transform = `translateY(-${position}px)`;

  requestAnimationFrame(floatEffect);
}

floatEffect();

const navLinks = document.querySelectorAll("nav a");

document.addEventListener("mousemove", (e) => {
  navLinks.forEach(link => {

    const rect = link.getBoundingClientRect();
    const linkX = rect.left + rect.width / 2;
    const linkY = rect.top + rect.height / 2;

    const dx = e.clientX - linkX;
    const dy = e.clientY - linkY;
    const distance = Math.sqrt(dx*dx + dy*dy);

    const maxDist = 100;
    if(distance < maxDist){
      
      const lift = (1 - distance / maxDist) * 10; 
      link.style.transform = `translateY(-${lift}px)`;
      link.style.transition = "transform 0.1s ease";
    } else {
      link.style.transform = "translateY(0)";
      link.style.transition = "transform 0.3s ease";
    }
  });
});
