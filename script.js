

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    let progress = (scrollTop / documentHeight) * 100; // Calculate percentage
  
    document.querySelector(".progress_bar").style.height = progress + "%"; // Update height
    console.log(progress);
  });
  