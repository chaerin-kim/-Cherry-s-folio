/* 햄버거바 */
const hamBtn = document.querySelector('.ham');
const gnb = document.querySelector('.gnb');
const overlay = document.createElement('div'); // 오버레이 생성

hamBtn.addEventListener('click', () => {
  if (gnb.style.display === 'none') {
    // 햄버거 버튼 클릭 시 .gnb 요소가 나타남
    gnb.style.display = 'block';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; 
    overlay.style.zIndex = '999'; 
    document.body.appendChild(overlay); 
  } else {
    gnb.style.display = 'none';
    overlay.remove();
  }
});

// 오버레이를 클릭하면 gnb이 사라지도록 함
overlay.addEventListener('click', () => {
  gnb.style.display = 'none';
  overlay.remove();
});


// .peopleSay  swiper
let slide = new Swiper('.slide', {
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
  },
});
//.peopleSay swiper '버튼' 활성화
document
  .querySelector('.swiper-button-prev')
  .addEventListener('click', function () {
    // 배경 색상을 변경할 요소 선택
    const clickedButton = this;
    document.querySelector('.swiper-button-next').style.backgroundColor = '';
    document.querySelector('.swiper-button-next').style.color = 'white';
    clickedButton.style.backgroundColor = 'white';
    clickedButton.style.color = 'black';
  });
// next 버튼 클릭 시
document
  .querySelector('.swiper-button-next')
  .addEventListener('click', function () {
    const clickedButton = this;
    document.querySelector('.swiper-button-prev').style.backgroundColor = '';
    document.querySelector('.swiper-button-prev').style.color = 'white';
    clickedButton.style.backgroundColor = 'white';
    clickedButton.style.color = 'black';
  });

//.blog 섹션
// card2 클릭 시 특정 링크로 이동
document
  .querySelector('.cardBox > .card2')
  .addEventListener('click', function () {
    window.location.href = '#'; // card2를 클릭했을 때 이동할 링크 주소
  });
