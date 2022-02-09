// スクロール

const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', (e) => {
        

        e.preventDefault();
        let href = smoothScrollTrigger[i].getAttribute('href'); 
        let targetElement = document.getElementById(href.replace('#', '')); 
        
        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset; 
        const gap = 60; 
        const target = rect + offset - gap; 

        window.scrollTo({
            top: target,
            behavior: 'smooth',
        });

    });

}



// ここからmodal

document.getElementById("modalOpen").addEventListener("click", function() {
    document.getElementById("modal").classList.add("active");
    document.getElementById("modal-mask").classList.add("active");
});

document.getElementById("modalClose").addEventListener("click", function() {
    document.getElementById("modal").classList.remove("active");
    document.getElementById("modal-mask").classList.remove("active");
});

document.getElementById("modal-mask").addEventListener("click", function() {
    document.getElementById("modal").classList.remove("active");
    document.getElementById("modal-mask").classList.remove("active");
});