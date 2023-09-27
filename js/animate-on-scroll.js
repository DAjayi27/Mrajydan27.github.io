const observer = new IntersectionObserver(animateOnScroll);

function animateOnScroll(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Good");
            entry.target.classList.add('show');
            // Trigger your animation logic here
        } else {
            console.log("BAD");
            entry.target.classList.remove('show');
        }
    });
}

let elements = document.querySelectorAll('.hidden');

elements.forEach((element) => observer.observe(element));
