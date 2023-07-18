const menu = document.querySelector('.menu')
const menuList = document.querySelector('nav ul')
menu.addEventListener('click',()=>{
    menuList.classList.toggle('showmenu')
})






//sproduct

        var MainImg = document.getElementById("MainImg");
        var smallimg = document.getElementsByClassName("small-img");

        smallimg[0].onclick = function(){
            MainImg.src = smallimg[0].src;
        }
        smallimg[1].onclick = function(){
            MainImg.src = smallimg[1].src;
        }
        smallimg[2].onclick = function(){
            MainImg.src = smallimg[2].src;
        }
        smallimg[3].onclick = function(){
            MainImg.src = smallimg[3].src;
        }
   

// view images

        let images = document.querySelectorAll("img");
        let wrapper = document.getElementById("wrapper");
        let imgWrapper = document.getElementById("fullImg");
        let close = document.querySelector("span");
        
        images.forEach((img, index) => {
          img.addEventListener("click", () => {
            openModal(`images/img${index}.jpg`);
          });
        });
        
        close.addEventListener("click", () => (wrapper.style.display = "none"));
        
        function openModal(pic) {
          wrapper.style.display = "flex";
          imgWrapper.src = pic;
        }




        var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// Auto Slide   if you need auto slide ,remove the commit "//"
// var slideIndex = 0;
// showSlides();
// function showSlides() {
//     var i;
//    var slides = document.getElementsByClassName("mySlides");
//    for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    slideIndex++;
//    if (slideIndex > slides.length) { slideIndex = 1 }
//    slides[slideIndex - 1].style.display = "block";
//    setTimeout(showSlides, 2000); // Change image every 2 seconds
// }







let menus = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menus.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menus.classList.remove('fa-times');
    header.classList.remove('active');
}



var btn = document.getElementById('btn');
btn.addEventListener('click',function(e){
    e.preventDefault()
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var message=document.getElementById('message').value;
    var body='name: ' +name + '<br/> email: ' +email + '<br/> message' + message;


    Email.send({
    Host : "smtp.gmail.com",
    Username : "raja.shivaraja2000@gmail.com",
    Password : "ofgtawgvidhywsag",
    To : 'raja.shivaraja2000@gmail.com',
    From : email,
    Subject : "This is the subject",
    Body : body
}).then(
  message => alert(message)
);
})