/* 햄버거바 */
const hamBtn = document.querySelector('.ham');
const closeBtn = document.querySelector('.close');
const gnb = document.querySelector('.gnb');
// .ham 누르면
hamBtn.addEventListener('click', () => {
  gnb.classList.add('on', 'blur');
  closeBtn.classList.add('on');
  hamBtn.style.display = 'none';
});

// .close 누르면
closeBtn.addEventListener('click', () => {
  gnb.classList.remove('on');
  closeBtn.classList.remove('on');
  hamBtn.style.display = 'flex';
  gnb.classList.remove('blur'); // 가상 요소의 블러 클래스 제거
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
