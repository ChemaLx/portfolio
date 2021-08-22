window.addEventListener('DOMContentLoaded',() => {
    VanillaTilt.init(document.querySelectorAll(".sci li a"), {
		max: 25,
		speed: 400,
        glare: true,
        "max-glare": 0.6, 
	});

    /* let circle = document.querySelector('.circle');
    let h = document.querySelector('.h');
    
    console.log(h)

    circle.addEventListener('mouseover', (event) => {
        h.style.display='block'
    }) */


    let list = document.querySelectorAll('.sci li');
    let bg = document.querySelector('.social-media');
    
    if(list && bg){
        list.forEach(element => {
            element.addEventListener('mouseenter', (event) => {
                let color = event.target.getAttribute('data-color');
                bg.style.backgroundColor = color;
                
            })
            element.addEventListener('mouseleave', (event) => {
                bg.style.backgroundColor = '#fff';
                
            })
        })
    }
})
