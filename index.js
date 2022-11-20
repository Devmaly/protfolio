{
    const home_btn =document.getElementById("nav1");
    home_btn.addEventListener("click", function(){
        window.scroll(0,0);
    })
    
    const edu_btn = document.getElementById("nav2");
    edu_btn.addEventListener("click",function(){
        window.scroll(0,1000);
    })

    const skill_btn = document.getElementById("nav3");
    skill_btn.addEventListener("click", function(){
        window.scroll(0,2000);
    })

    const pro_btn = document.getElementById("nav4");
    pro_btn.addEventListener("click", function(){
        window.scroll(0,2400);
    })

    const about_btn = document.getElementById("nav5");
    about_btn.addEventListener("click", function(){
        window.scroll(0,3500);
    })

    const contact_btn = document.getElementById("nav6");
    contact_btn.addEventListener("click", function(){
        window.scroll(0,5000);
    })
}
