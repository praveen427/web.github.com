window.onload = function(){
    const colour_btn_els = document.querySelectorAll('.colours .colour');
    const capacity_btn_els = document.querySelectorAll('.capacity .size');
    const image_els = document.querySelector('.imagery .image');
    const imagery_els = document.querySelector('.imagery')

    for( let i=0; i < capacity_btn_els.length; i++ ){
        let btn = capacity_btn_els[i];

        btn.addEventListener('click', function(){
            document.querySelector('.capacity .size.selected').classList.remove('selected');
            this.classList.add('selected');

        });
    }
    
    for( let i = 0; i < colour_btn_els.length; i++){
        let btn  = colour_btn_els[i];

        btn.addEventListener('click', function(){
            document.querySelector('.colours .colour.selected').classList.remove('selected');
            this.classList.add('selected');
            image_els.src = "images/iphone-xr-" +  this.dataset.name + '.png';
            imagery_els.style.backgroundColor =  this.dataset.colour;
        });

    }


}