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
// ======nav-bar======
window.addEventListener('scroll',()=>{
    if (window.scrollY>200){
        document.querySelector('.navbar').classList.add('fixed-top')
    } 
// else {
//         document.querySelector('.navbar').classList.remove('fixed-top')
//     }
 })