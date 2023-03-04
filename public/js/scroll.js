const setupScrolling = () =>{
    const conatiner = [...document.querySelectorAll('.movie-container')];
    const nxtBtn=[...document.querySelectorAll('.nxt-btn')];
    const preBtn=[...document.querySelectorAll('.pre-btn')];


    conatiner.forEach((item, i) =>{
        let containerDimensions = item.getBoundingClientRect();
        let containerwidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerwidth;
        })
        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerwidth;
        })
    })
}