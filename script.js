const circular_slider = document.querySelector('.wrapper');
    slides= document.querySelectorAll('.slides');
    images= document.querySelectorAll('.slides img');
    slides.forEach((slides,i)=>{
        slides.onclick = ()=>{
            circular_slider.style.transform = `rotateZ(-${360/5 * (i+2)}deg)`;

            images.forEach((img, i)=>{
                img.style.setProperty('--img-no', 2);
            })
        
            slides.querySelector('img').classList.add('active');
        }
    })