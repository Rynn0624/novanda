const music = document.getElementById("music");

const opening = document.getElementById("opening");
const main = document.getElementById("main");
const closing = document.getElementById("closing");

const photo = document.getElementById("photo");
const text = document.getElementById("text");
const bg = document.getElementById("bg-blur");

const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");

const slides = [
 { text:"Selamat ulang tahun yang ke 20 🤍 semoga selalu ceria 🙈", photo:"photos/1.jpeg" },
 { text:"Some flowers for you 💐💐", photo:"photos/2.jpeg" },
 { text:"Today is your birthday 🤍 semoga semua wishlist kamu tercapai", photo:"photos/3.jpeg" },
 { text:"Di foto ini kamu lucu banget 😆 aku suka senyum kamu", photo:"photos/4.jpeg" },
 { text:"🐻🤍🐻🤍", photo:"photos/6.jpeg" },
 { text:"One more happy birthday 🎊 semoga bahagia selalu 🤍", photo:"photos/5.jpeg" }
];

let index = 0;
let isAnimating = false;

function celebrate(){
    const birthday = document.getElementById("birthday").value;
    if(!birthday){
        alert("Pilih tanggal lahirmu dulu!");
        return;
    }

    // 🔥 KUNCI IPHONE
    music.volume = 0.8;
    music.play();

    opening.classList.add("hidden");
    main.classList.remove("hidden");

    loadSlide();
    startHearts();
    startFlowers();
}

function loadSlide(){
    photo.src = slides[index].photo;
    text.innerText = slides[index].text;
    bg.style.backgroundImage = `url('${slides[index].photo}')`;

    if(index === slides.length - 1){
        nextBtn.classList.add("hidden");
        finishBtn.classList.remove("hidden");
    }
}

function nextSlide(){
    if(isAnimating) return;
    if(index >= slides.length - 1) return;

    isAnimating = true;
    index++;

    photo.classList.add("fade-out");

    setTimeout(()=>{
        loadSlide();
        photo.classList.remove("fade-out");
        isAnimating = false;
    },400);
}

function goToClosing(){
    main.classList.add("hidden");
    closing.classList.remove("hidden");
}

/* ❤️ Hearts */
function startHearts(){
    setInterval(()=>{
        const heart = document.createElement("span");
        heart.innerHTML = "🤍";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.fontSize = Math.random()*10 + 12 + "px";
        document.querySelector(".hearts").appendChild(heart);
        setTimeout(()=>heart.remove(),12000);
    },1200);
}

/* 🌸 Flowers */
function startFlowers(){
    setInterval(()=>{
        const flower = document.createElement("span");
        const icons = ["🌸","🌷","🌼","💐"];
        flower.innerHTML = icons[Math.floor(Math.random()*icons.length)];
        flower.style.left = Math.random()*100 + "vw";
        flower.style.fontSize = Math.random()*10 + 14 + "px";
        document.querySelector(".flowers").appendChild(flower);
        setTimeout(()=>flower.remove(),15000);
    },1500);
}
