const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.replace('fade_to_left', 'show');
            entry.target.classList.replace('fade_to_right', 'show');
        }
        else{
            entry.target.classList.replace('show', 'fade_to_left');
            entry.target.classList.replace('show', 'fade_to_right');
        }
    });
})

const hiddenElements = document.querySelectorAll('.fade');
hiddenElements.forEach((e1) => observer.observe(e1));