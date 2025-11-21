// function RanInt(l, r) {
//     return Math.floor(Math.random() * (r - l + 1)) + l;
// }

// // gene background
// const background = document.querySelector('.background');
// const musicplayer = document.createElement('img');
// musicplayer.src = './img/musicplayer2.png';
// musicplayer.className = 'musicplayer musicplayer2';
// musicplayer.style.height = '250px';

// const n = 20;
// for (let i = 0; i < n; i++) {
//     let musicplayerClone = musicplayer.cloneNode();
//     musicplayerClone.style.top = RanInt(-30, 100) + '%';
//     musicplayerClone.style.left = RanInt(-30, 100) + '%';

//     const baseRot = RanInt(-180, 180);
//     musicplayerClone.dataset.baseRotate = baseRot;
//     // ensure transform initially includes translate so later translate animates smoothly
//     musicplayerClone.style.transform = `translate(0px, 0px) rotate(${baseRot}deg)`;
//     background.appendChild(musicplayerClone);
// }

// function moveOnce(el) {
//     const dx = RanInt(-30, 30);
//     const dy = RanInt(-20, 20);
//     const base = Number(el.dataset.baseRotate) || 0;
//     const deltaRot = RanInt(-15, 15);
//     const rotate = base + deltaRot;
//     const duration = (RanInt(4, 8) + Math.random()).toFixed(2);

//     // set transition, then change transform on next paint to ensure transition runs
//     el.style.transition = `transform ${duration}s linear`;
//     requestAnimationFrame(() => {
//         el.style.transform = `translate(${dx}px, ${dy}px) rotate(${rotate}deg)`;
//     });
// }

// function animateMusicPlayers() {
//     const players = document.querySelectorAll('.musicplayer');
//     players.forEach(el => {
//         moveOnce(el);
//     });
// }

// animateMusicPlayers();

const background = document.querySelector('.background');
const heart = document.createElement('i')
heart.className = 'fa-solid fa-heart';
const color = [`lightpink`, `rgb(158, 46, 72)`, `rgba(122, 42, 54, 1)`];

for (let i = 0; i <= 10; i++) {
    let heartClone = heart.cloneNode();
    heartClone.style.color = color[i % 3];
    heartClone.style.animation = `zoomHeart 10s ${2 * i}s both`;
    background.appendChild(heartClone);
}

// gene lyrics
const lyrics = [
    ["mọi ấm áp trên đời...", 1.75],
    ["anh dành...", 1.25],
    ["cho em", 1.5],
    ["tia nắng sáng bên thềm...", 1.75],
    ["trời đẹp...", 1.25],
    ["do em", 1.5],
    ["mây trôi ngắm đôi mình...", 1.75],
    ["lại tị...", 1.25],
    ["cho xem", 1.5],
    ["nhẹ xóa đi những vết thương...", 1.75],
    ["mà đời...", 1.25],
    ["trao em", 1.5],
    ["♬♬♬♬♬♬♬♬♬♬♬♬♬♬", 5]
]

const container = document.querySelector('.container');

let delay = 0;
for (let index = 0; index < lyrics.length; index++) {
    const text = lyrics[index][0];
    const duration = lyrics[index][1];
    const lyric = document.createElement('div');
    lyric.className = 'container-sentence';
    container.appendChild(lyric);

    lyric.style.animation = `zoom ${duration}s ${delay}s both, gentle-shake ${duration}s ${delay}s linear both`;
    if (index % 3 === 2) 
        lyric.style.animation += `, pink-color ${duration - 1}s ${delay}s ease-in both`;

    const words = text.split(/\s+/).filter(Boolean);
    const wordStagger =  duration / (words.length + 1);
    
    for (let i = 0; i < words.length; i++) {
        const span = document.createElement('span');
        span.className = 'word';
        span.innerText = words[i];
        const wordDelay = delay + i * wordStagger;
        const wordAnimDuration = (words.length - i) * wordStagger;
        span.style.animation = `fadeIn ${wordAnimDuration}s ${wordDelay}s both`;
        lyric.appendChild(span);
        lyric.appendChild(document.createTextNode(' '));
    }
    delay += duration;
}