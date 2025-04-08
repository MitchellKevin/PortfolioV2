window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    let progress = (scrollTop / documentHeight) * 100; // Calculate percentage
  
    document.querySelector(".progress_bar").style.height = progress + "%"; // Update height
    console.log(progress);
  });
  
  window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    let progress = (scrollTop / documentHeight) * 100; // Calculate percentage
  
    document.querySelector(".progress_bar").style.height = progress + "%"; // Update height
    console.log(progress);
});
  
document.addEventListener('DOMContentLoaded', function() {
    const workSection = document.getElementById('Work');
    const images = workSection.querySelectorAll('.work-slide img');

    function onScroll() {
        const sectionTop = workSection.getBoundingClientRect().top;
        const sectionBottom = workSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight && sectionBottom > 0) {
            images.forEach(img => {
                img.classList.add('visible');
            });
        } else {
            images.forEach(img => {
                img.classList.remove('visible');
            });
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll();
});

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.clickable-img1');

  images.forEach(img => {
      img.addEventListener('click', function() {
        window.location.href = '/projects/cocktail';
       
    } 
  );
});
});

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.clickable-img2');

  images.forEach(img => {
      img.addEventListener('click', function() {
        window.location.href = '/projects/gardencmd';
       
    } 
  );
});
});
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.clickable-img3');

  images.forEach(img => {
      img.addEventListener('click', function() {
        window.location.href = '/projects/nao';
       
    } 
  );
});
});
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.clickable-img4');

  images.forEach(img => {
      img.addEventListener('click', function() {
        window.location.href = '/projects/mclaren';
       
    } 
  );
});
});
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.clickable-img5');

  images.forEach(img => {
      img.addEventListener('click', function() {
        window.location.href = '/projects/mario';
       
    } 
  );
});
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('open');
    });
});