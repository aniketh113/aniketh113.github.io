document.querySelector(".contact-form").addEventListener(".submit",submitform);
function submitform(e){
    e.preventDefault();
    let fname =document.querySelector(".firstname").value;
    let lname =document.querySelector(".lastname").value;
    let email =document.querySelector(".email").value;
    let message =document.querySelector(".message").value;
console.log(fname,lname,email,message);
}