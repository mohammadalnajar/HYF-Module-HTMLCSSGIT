const dark=document.querySelector('.dark');
const dropdowns=document.querySelectorAll('.dropdown-js');

dropdowns.forEach(drop=>{
    drop.addEventListener('mouseover', ()=>{
        dark.classList.add('screen-darken')
    })
    drop.addEventListener('mouseout', ()=>{
        dark.classList.remove('screen-darken')
    })
})
