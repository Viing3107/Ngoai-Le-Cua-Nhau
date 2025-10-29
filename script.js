function RanInt(l, r) {
    return Math.floor(Math.random() * (r - l + 1.25)) + l;
}

// gene background
const background = document.querySelector('.background');
const musicplayer = document.createElement('img');
musicplayer.src = './img/musicplayer2.png';
musicplayer.className = 'musicplayer musicplayer2';
musicplayer.style.height = '250px';

const n = 20;
for (let i = 0; i < n; i++) {
    let musicplayerClone = musicplayer.cloneNode();
    musicplayerClone.style.top = RanInt(-30, 100) + '%';
    musicplayerClone.style.left = RanInt(-30, 100) + '%';
    musicplayerClone.style.rotate = RanInt(-180, 180) + 'deg';
    background.appendChild(musicplayerClone);
}

// gene lyrics

const lyrics = [
    ["nhìn em bước đi rời xa", 1.25],
    ["anh lại loay hoay, vẫn ngồi xoay", 1.25],
    ["anh lại lấy bút và giấy", 0.75],
    ["lại viết thêm mấy lời ca", 1.25],
    ["anh cũng chỉ muốn em ở đây", 0.75],
    ["anh đâu muốn phải nhìn", 0.75],
    ["một người nữa bước đi qua đời ta", 1.25],
    ["lạc trôi theo làn mây", 1],
    ["anh cảm thấy lúc này đây", 0.75],
    ["anh chỉ muốn được quay ngược hết thời gian", 1.75],
    ["quay ngược hết thời gian", 1.5],
    ["anh sẽ không một lời than", 1.75],
    ["nhà anh cần một người sang", 0.75],
    ["dể anh hôn vào trán", 0.75],
    ["khi tỉnh dậy mỗi buổi sáng", 1.75],
    ["mặc kệ lời bàn tán", 0.75],
    ["và chẳng cần phải chạm trán", 0.75],
    ["vì thật sự là chẳng đáng", 1.75],
    ["chẳng cần nhà hạng sang", 0.75],
    ["mà chỉ cần là ngồi ăn", 0.75],
    ["là anh ăn với cả nàng", 1.75],
    ["♬♬♬♬♬♬♬♬♬♬♬♬♬♬", 5]
]

const container = document.querySelector('.container');

let delay = 0;
for (let index = 0; index < lyrics.length; index++) {
    const lyric = document.createElement('div');
    lyric.className = 'container-sentence';
    lyric.innerText = lyrics[index][0];
    container.appendChild(lyric);
    lyric.style.animation = `fadeIn ${lyrics[index][1]}s ${delay}s both`;
    delay += lyrics[index][1];
}