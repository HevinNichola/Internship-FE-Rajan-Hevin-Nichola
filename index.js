


window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const imageBoxes = document.querySelectorAll('.image-box');

  const originalPositions = [];

  imageBoxes.forEach(box => {
    const rect = box.getBoundingClientRect();
    originalPositions.push({
      box,
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    });
  });

  const containerRect = container.getBoundingClientRect();
  const containerCenter = {
    x: containerRect.left + containerRect.width / 2 + window.scrollX,
    y: containerRect.top + containerRect.height / 2 + window.scrollY,
  };

  async function moveEachBoxToCenterSequentially() {
    for (let i = 0; i < imageBoxes.length; i++) {
      const box = imageBoxes[i];
      const boxRect = box.getBoundingClientRect();
      const boxCenter = {
        x: boxRect.left + boxRect.width / 2 + window.scrollX,
        y: boxRect.top + boxRect.height / 2 + window.scrollY,
      };
      const deltaX = containerCenter.x - boxCenter.x;
      const deltaY = containerCenter.y - boxCenter.y;

      box.style.transition = 'transform 0.8s ease-in-out';
      box.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

      // Wait before moving next box
      await new Promise(res => setTimeout(res, 500));
    }
  }

  async function moveAllBoxesToSamePoint() {
    // Final position offset from center (optional)
    const finalOffsetX = 0;
    const finalOffsetY = 0;

    imageBoxes.forEach(box => {
      box.style.transition = 'transform 0.8s ease-in-out';
      box.style.transform = `translate(${finalOffsetX}px, ${finalOffsetY}px)`;
    });
  }

  async function animateCycle() {
    while (true) {
      await moveEachBoxToCenterSequentially();
      await new Promise(res => setTimeout(res, 1000)); // Pause before next move
      await moveAllBoxesToSamePoint();
      await new Promise(res => setTimeout(res, 2000)); // Wait before restarting

      // Reset positions to original
      imageBoxes.forEach(box => {
        box.style.transition = 'transform 0.8s ease-in-out';
        box.style.transform = 'translate(0, 0)';
      });

      await new Promise(res => setTimeout(res, 2000));
    }
  }

  animateCycle();
});





  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Animate only once
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-animate]').forEach(img => {
      observer.observe(img);
    });
  });



    document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // animate once
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });
  });



    const heading = document.querySelector('.collaboration-tool');
  const words = heading.textContent.split(' ');
  heading.textContent = ''; // Clear current text

  let index = 0;

  function showNextWord() {
    if (index < words.length) {
      heading.textContent += (index > 0 ? ' ' : '') + words[index];
      index++;
      setTimeout(showNextWord, 500); // delay in milliseconds between words
    }
  }

  showNextWord();



  document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector(".last-heading");

  function fadeCycle() {
    // Fade in
    heading.classList.add("visible");

    // Stay visible for 3 seconds, then fade out
    setTimeout(() => {
      heading.classList.remove("visible");
    }, 3000);

    // After fade out (1s transition), repeat
    setTimeout(fadeCycle, 2000);
  }

  fadeCycle();
});
