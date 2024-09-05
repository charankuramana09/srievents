// Function to add animations when elements come into view
document.addEventListener("DOMContentLoaded", function () {
    const postItems = document.querySelectorAll(
      "#post-item-1 .post-item, #post-item-2 .post-item, #post-item-3 .post-item, #post-item-4 .post-item, #post-item-5 .post-item, #post-item-6 .post-item"
    );
  
    // Function to check if an element is in the viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    // Function to add 'visible' class with staggered directional effects
    const animatePosts = () => {
      postItems.forEach((item, index) => {
        if (isInViewport(item) && !item.classList.contains("visible")) {
          setTimeout(() => {
            item.classList.add("visible");
          }, index * 500); // Staggered delay of 0.5 seconds between each item
        }
      });
    };
  
    // Initial setup for assigning directional classes
    postItems.forEach((item, index) => {
      // Assign different animations based on index for variety
      if (index % 3 === 0) {
        item.classList.add("from-left");
      } else if (index % 3 === 1) {
        item.classList.add("from-right");
      } else {
        item.classList.add("from-bottom");
      }
    });
  
    // Trigger animation check on load and scroll
    animatePosts();
    window.addEventListener("scroll", animatePosts);
  });
  