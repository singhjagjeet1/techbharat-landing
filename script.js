function openWhatsApp(){

let phone = "919050358180"; // 🔥 replace with your number

let message = "Hi, I am interested in TechBharat courses";

let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

window.open(url, "_blank");

}
