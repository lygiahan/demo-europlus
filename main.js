
let arrayImage = [
    {
      img: "http://europlus.com.vn/wp-content/uploads/2019/01/Europlus-Slider-02.jpg",
    },
    {
      img: "http://europlus.com.vn/wp-content/uploads/2019/01/Europlus-Slider-04.jpg",
    },
    {
      img: "http://europlus.com.vn/wp-content/uploads/2019/01/Europlus-Slider-05.jpg",
    },
  ];
  let currentImg =0;
  window.addEventListener("DOMContentLoaded", (event) => {
     showImage();
  })
  function showImage(){
      const item  = arrayImage[currentImg];
           imgHero.src  = item.img;
  }
  setInterval(()=>{
      currentImg ++;
      if(currentImg ===3){
          currentImg=0;
      }
      showImage(currentImg);
  },5000)

let navbar = document.querySelector('.navbar');
let navbaroffsettop = navbar.offsetTop;
let navbarImg = document.getElementById('navbar-logo');
let linkNavbar1 = document.getElementById('navbar-link1');
let linkNavbar2 = document.getElementById('navbar-link2');
let linkNavbar3 = document.getElementById('navbar-link3');
let linkNavbar4 = document.getElementById('navbar-link4');
let linkNavbar5 = document.getElementById('navbar-link5');
let searchNavbar = document.getElementById('navbar-search');
//   let prev = document.querySelector('#prev');
//   let next = document.querySelector('#next');
  let imgHero = document.getElementById('banner');
  
  
  
  

function myFunction(){
    if(window.pageYOffset >= navbaroffsettop){
        navbar.classList.add('fixed_top');  
        navbarImg.style.display="block";
       
       setTimeout(function(){
        linkNavbar1.style.color="black";
        linkNavbar2.style.color="black";
        linkNavbar3.style.color="black";
        linkNavbar4.style.color="black";
        linkNavbar5.style.color="black";
     },200)

    }else{
            navbar.classList.remove('fixed_top');
            navbarImg.style.display="none";   

           setTimeout(function(){
            linkNavbar1.style.color="white";
            linkNavbar2.style.color="white";
            linkNavbar3.style.color="white";
            linkNavbar4.style.color="white";
            linkNavbar5.style.color="white ";
           },200)

        
    }
}


