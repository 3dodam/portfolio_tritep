let pTag1 = document.querySelector(".first-parallel");
let textArr1 = 'Gathering Each Small Step Towards Big Dreams, Gathering Each Small Step Towards Big Dreams, '.split(' ');
let count1 = 0;

initTexts(pTag1, textArr1)

function initTexts(element, textArray) {
  textArray = textArray.concat(textArray.slice(0, textArray.length - 1)); // 배열을 반복해서 뒤에 추가
  element.innerHTML = textArray.map((text) => `${text}\u00A0\u00A0\u00A0`).join(''); // 배열의 내용을 문자열로 만들어서 요소에 삽입
}

function animate() {
  count1++;
  count1 = marqueeText(count1, pTag1, -1)
  if (count1 % 3 === 0) {
    window.requestAnimationFrame(animate);
  } else {
    setTimeout(animate, 10);
  }
}


function marqueeText(count, element, direction) {
  if (count > element.scrollWidth / 2) {
    count = 0;
    element.style.transform = `translate(0, 0)`; // transform 스타일 초기화
  }
  element.style.transform = `translateX(${count * direction}px)`;
  return count;
}

function scrollHandler() {
  count1 += 20;
}


animate();
window.addEventListener("scroll", scrollHandler)

let pTag2 = document.querySelector(".second-parallel");
let textArr2 = 'Welcome To My Gallery! Welcome To My Gallery! Welcome To My Gallery!'.split(' ');
let count2 = 0;

initTexts(pTag2, textArr2)

function initTexts(element, textArray) {
  textArray = textArray.concat(textArray.slice(0, textArray.length - 1)); // 배열을 반복해서 뒤에 추가
  element.innerHTML = textArray.map((text) => `${text}\u00A0\u00A0\u00A0`).join(''); // 배열의 내용을 문자열로 만들어서 요소에 삽입
}

function animate2() {
  count2++;
  count2 = marqueeText(count2, pTag2, -1)
  if (count2 % 3 === 0) {
    window.requestAnimationFrame(animate2);
  } else {
    setTimeout(animate2, 10);
  }
}


function marqueeText(count, element, direction) {
  if (count > element.scrollWidth / 2) {
    count = 0;
    element.style.transform = `translate(0, 0)`; // transform 스타일 초기화
  }
  element.style.transform = `translateX(${count * direction}px)`;
  return count;
}

function scrollHandler() {
  count2 += 20;
}


animate2();









// 각 링크 요소들을 선택합니다.
const aboutMeLink = document.querySelector(".a9");
const favoriteLink = document.querySelector(".a10");
const skillLink = document.querySelector(".a11");

// 각 링크에 클릭 이벤트를 추가합니다.
aboutMeLink.addEventListener("click", function () {
  toggleContent("about_me");
});

favoriteLink.addEventListener("click", function () {
  toggleContent("favorite");
});

skillLink.addEventListener("click", function () {
  toggleContent("skill");
});

// content를 토글하는 함수를 정의합니다.
function toggleContent(contentClass) {
  // 모든 content 요소를 숨깁니다.
  const allContents = document.querySelectorAll(".content");
  allContents.forEach(function (content) {
    content.classList.remove("show");
  });

  // 선택한 content 요소만 보여줍니다.
  const selectedContent = document.querySelector(`.${contentClass}`);
  selectedContent.classList.add("show");

  // 선택한 content 요소에 "animate-me" 클래스가 있을 경우 애니메이션을 실행합니다.
  if (selectedContent.classList.contains("show")) {
    piechartAnimation();
  }
}

// 애니메이션을 실행하는 함수를 정의합니다.
function piechartAnimation() {
  // 기존의 piechart 함수를 그대로 호출하여 pie chart 애니메이션을 실행합니다.
  piechart();

  // 선택한 content 요소에 "animate-me" 클래스가 있을 경우 숫자 카운터 애니메이션을 실행합니다.
  const counterDate = $('.box h3[data-rate]');
  if (counterDate.length > 0 && counterDate.eq(0).is(":visible")) {
    counterDate.each(function () {
      let current = $(this);
      let target = current.attr('data-rate');
      $({
        rate: 0
      }).animate({
        rate: target
      }, {
        duration: 2500,
        progress: function () {
          let now = this.rate;
          current.text(Math.ceil(now) + "%");
        }
      });
    });
  }
}
// 기본 pie chart 애니메이션을 초기화하는 함수를 정의합니다.
function piechart() {
  $('.chart').easyPieChart({
    barColor: '#CDF17F',
    scaleColor: false,
    trackColor: '#444',
    lineWidth: 15,
    size: 180,
    animate: 2000
  });
}




// 함수를 사용하여 토글 기능 구현
function toggleShowClass(element) {
  // 현재 토글되는 요소 외의 모든 .showA 클래스 제거
  var elements = document.querySelectorAll(".a9, .a10, .a11");
  for (var i = 0; i < elements.length; i++) {
    if (elements[i] !== element) {
      elements[i].classList.remove("showA");
    }
  }

  // 현재 요소에 .showA 클래스 토글
  element.classList.toggle("showA");
}

// 이벤트 리스너 등록
document.addEventListener("DOMContentLoaded", function () {
  var elements = document.querySelectorAll(".a9, .a10, .a11");

  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function () {
      toggleShowClass(this);
    });
  }
});




const uxuis = document.querySelectorAll('.uxui');

function toggleActive() {
  uxuis.forEach((element) => {
    if (element === this) {
      element.classList.toggle('active');
    } else {
      element.classList.remove('active');
    }
  });
}

function setHover() {
  this.classList.add('active');
}

function removeHover() {
  this.classList.remove('active');
}

uxuis.forEach((element) => {
  element.addEventListener('click', toggleActive);
  element.addEventListener('mouseenter', setHover);
  element.addEventListener('mouseleave', removeHover);
});



const hobbys = document.querySelectorAll('.hobby');

function setHover() {
  this.classList.add('active');
}

function removeHover() {
  this.classList.remove('active');
}





const hobby1 = document.querySelector('.hobby1');
const hobby2 = document.querySelector('.hobby2');
const hobby3 = document.querySelector('.hobby3');
const hobby4 = document.querySelector('.hobby4');

const hobbyImg1 = document.querySelector('.hobbyimg1');
const hobbyImg2 = document.querySelector('.hobbyimg2');
const hobbyImg3 = document.querySelector('.hobbyimg3');
const hobbyImg4 = document.querySelector('.hobbyimg4');

// 각각의 취미(div.hobby1~4)에 마우스 오버 이벤트를 추가합니다.
hobby1.addEventListener('mouseover', function () {
  // 해당 취미에 해당하는 이미지를 보여줍니다.
  hobbyImg1.style.opacity = '1';
  hobbyImg2.style.opacity = '0';
  hobbyImg3.style.opacity = '0';
  hobbyImg4.style.opacity = '0';
});

hobby2.addEventListener('mouseover', function () {
  hobbyImg1.style.opacity = '0';
  hobbyImg2.style.opacity = '1';
  hobbyImg3.style.opacity = '0';
  hobbyImg4.style.opacity = '0';
});

hobby3.addEventListener('mouseover', function () {
  hobbyImg1.style.opacity = '0';
  hobbyImg2.style.opacity = '0';
  hobbyImg3.style.opacity = '1';
  hobbyImg4.style.opacity = '0';
});

hobby4.addEventListener('mouseover', function () {
  hobbyImg1.style.opacity = '0';
  hobbyImg2.style.opacity = '0';
  hobbyImg3.style.opacity = '0';
  hobbyImg4.style.opacity = '1';
});




function showPopup(deviceType) {
  let width, height;

  if (deviceType === 'mobile') {
    width = '360px';
    height = '640px';
  } else if (deviceType === 'tablet') {
    width = '768px';
    height = '1024px';
  } else {
    return;
  }

  window.open(
    'https://3dodammusign.netlify.app/',
    '_blank',
    `width=${width},height=${height}`
  );
}


function openPopup(device) {
  var width, height;
  if (device === '태블릿') {
      width = 600; // 태블릿 사이즈 가로 크기
      height = 800; // 태블릿 사이즈 세로 크기
  } else if (device === '모바일') {
      width = 375; // 모바일 사이즈 가로 크기
      height = 667; // 모바일 사이즈 세로 크기
  }

  var left = (screen.width - width) / 2;
  var top = (screen.height - height) / 2;
  var features = `width=${width},height=${height},left=${left},top=${top}`;

  // 새 창을 열기 위한 코드
  window.open('https://3dodammusign.netlify.app/', '_blank', features);
}


function openPopup2(device) {
  var width, height;
  if (device === 'stablet') {
      width = 600; // 태블릿 사이즈 가로 크기
      height = 800; // 태블릿 사이즈 세로 크기
  } else if (device === 'smobile') {
      width = 375; // 모바일 사이즈 가로 크기
      height = 667; // 모바일 사이즈 세로 크기
  }

  var left = (screen.width - width) / 2;
  var top = (screen.height - height) / 2;
  var features = `width=${width},height=${height},left=${left},top=${top}`;

  // 새 창을 열기 위한 코드
  window.open('https://3dodamsushi.netlify.app', '_blank', features);
}
function openPopup3(device) {
  var width, height;
  if (device === 'ws태블릿') {
      width = 600; // 태블릿 사이즈 가로 크기
      height = 800; // 태블릿 사이즈 세로 크기
  } else if (device === 'ws모바일') {
      width = 375; // 모바일 사이즈 가로 크기
      height = 667; // 모바일 사이즈 세로 크기
  }

  var left = (screen.width - width) / 2;
  var top = (screen.height - height) / 2;
  var features = `width=${width},height=${height},left=${left},top=${top}`;

  // 새 창을 열기 위한 코드
  window.open('https://dodamresponsive.netlify.app/', '_blank', features);
}




window.addEventListener('scroll', () => {
  /* -------------header animation-------------- */
  let winSCT = window.scrollY;
  let header = document.querySelector('.nav');

  if (winSCT > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});