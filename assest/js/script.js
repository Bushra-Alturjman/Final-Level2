const toggle = document.querySelector('.toggle');
const navItems = document.querySelector('.link-login');
const hero = document.querySelector(".hero")
const form = document.querySelector(".hero-form")
console.log(toggle);
toggle.addEventListener('click' , ()=>{
    if(navItems.classList=="link-login"){
        navItems.classList.add("active");
        toggle.innerHTML = `<i class="fa fa-close"></i>`;
        hero.style.marginTop="300px";
        form.style.bottom ="-50%"
    }else{
        navItems.classList.remove("active");
        toggle.innerHTML = `<i class='fa fa-bars'></i>`;
        hero.style.marginTop="2%";
        form.style.bottom ="0%"
    };
    
});