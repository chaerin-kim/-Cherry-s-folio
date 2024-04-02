let slide = new Swiper('.slide', {
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
  },
});

// const  cvBtn = document.querySelectorAll('.cvBtn')

// cvBtn.addEventListener('mouseover', function() {
//   Array.from(this.querySelectorAll('a')).forEach(a => {
//     a.style.color = 'blue';
//   });
// });

// cvBtn.addEventListener('mouseout', function() {
//   Array.from(this.querySelectorAll('a')).forEach(a => {
//     a.style.color = '';
//   });
// });

//.peopleSay 섹션 버튼 활성화
// 이벤트 리스너 등록
document.addEventListener('DOMContentLoaded', function () {
  document
    .querySelector('.swiper-button-prev')
    .addEventListener('click', function () {
      // 배경 색상을 변경할 요소 선택
      const clickedButton = this;

      document.querySelector('.swiper-button-next').style.backgroundColor = '';
      clickedButton.style.backgroundColor = 'white';
      clickedButton.style.color = 'black';
    });

  // next 버튼 클릭 시
  document
    .querySelector('.swiper-button-next')
    .addEventListener('click', function () {
      const clickedButton = this;

      document.querySelector('.swiper-button-prev').style.backgroundColor = '';
      clickedButton.style.backgroundColor = 'white';
      clickedButton.style.color = 'black';
    });
});

//.blog 섹션
document
  .querySelector('.cardBox > .card1')
  .addEventListener('click', function () {
    window.location.href = 'naver.com'; // card1을 클릭했을 때 이동할 링크 주소를 여기에 입력하세요
  });

// card2 클릭 시 특정 링크로 이동
document
  .querySelector('.cardBox > .card2')
  .addEventListener('click', function () {
    window.location.href = 'google.com'; // card2를 클릭했을 때 이동할 링크 주소를 여기에 입력하세요
  });
