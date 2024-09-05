document.addEventListener("DOMContentLoaded", function () {
    const postItems = document.querySelectorAll(".post-item");
  
    // Setup Intersection Observer to add the visible class when items come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });
  
    // Assign initial directional classes and observe each item
    postItems.forEach((item, index) => {
      if (index % 3 === 0) {
        item.classList.add("from-left");
      } else if (index % 3 === 1) {
        item.classList.add("from-right");
      } else {
        item.classList.add("from-bottom");
      }
  
      observer.observe(item);
    });
  });
  