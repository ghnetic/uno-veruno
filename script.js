const circular_slider = document.querySelector('.wrapper');
character_name= document.querySelector('character-name');

slides= document.querySelectorAll('.slides');
descriptions_items = document.querySelectorAll('.descriptions__item');
images= document.querySelectorAll('.slides img');
    
slides.forEach((slides,i)=>{
        slides.onclick = ()=>{
            circular_slider.style.transform = `rotateZ(-${360/5 * (i+4)}deg)`;
            character_name.classList.remove('active');
            setTimeout(() => {
                character_name.textContent = descriptions_items[i].querySelector('h1').textContent;
                character_name.classList.add('active');
            }, 800);
            
            images.forEach((img, i)=>{
                img.style.setProperty('--img-no', 2);
                img.classList.remove('active');
                descriptions_items[i].classList.remove('active');
            })
            descriptions_items[i].classList.add('active');
            slides.querySelector('img').classList.add('active');
        }
    })