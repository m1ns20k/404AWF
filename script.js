// 슬라이딩 패널 토글
const board = document.querySelector('.board');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    if (board.style.display === 'none' || board.style.display === '') {
        board.style.display = 'block';
        board.style.transform = 'translateX(0)';
        btn.style.transform = 'translateX(-300px)';
    } else {
        board.style.transform = 'translateX(300px)';
        btn.style.transform = 'translateX(0)';
        setTimeout(() => {
            board.style.display = 'none';
        }, 500);
    }
});

// 이미지 배열
const images = [
    'S_A', 'S_B', 'S_C', 'S_D', 'S_E', 'S_F', 'S_G', 'S_H', 'S_I', 'S_J', 'S_K', 'S_l',
    'S_M', 'S_N', 'S_O', 'S_P', 'S_Q', 'S_R', 'S_S', 'S_T', 'S_U', 'S_V', 'S_W', 'S_X',
    'S_Y', 'S_Z'
];

// 현재 인덱스
let currentIndex = 1;

// DOM 요소
const leftBox = document.querySelector('.left-box');
const centerBox = document.querySelector('.center-box');
const rightBox = document.querySelector('.right-box');
const centerImage = centerBox.querySelector('img');

// 이미지 업데이트 함수
function updateImages(direction) {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

    // 애니메이션 적용
    centerImage.classList.add(direction === 'left' ? 'slide-left' : 'slide-right');

    // 애니메이션 완료 후 이미지 업데이트
    setTimeout(() => {
        leftBox.querySelector('img').src = `Images/${images[prevIndex]}.svg`;
        centerBox.querySelector('img').src = `Images/${images[currentIndex]}.svg`;
        rightBox.querySelector('img').src = `Images/${images[nextIndex]}.svg`;

        // 애니메이션 클래스 제거
        centerImage.classList.remove('slide-left', 'slide-right');
    }, 300);
}

// 이벤트 리스너
leftBox.addEventListener('click', () => {
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    updateImages('left');
});

rightBox.addEventListener('click', () => {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    updateImages('right');
});

// 초기 이미지 설정
updateImages();

// About 토글 기능 추가
const aboutContainer = document.querySelector('.about-container');
const aboutToggle = document.querySelector('.about-toggle');

aboutToggle.addEventListener('click', () => {
    aboutContainer.classList.toggle('open');
}); 