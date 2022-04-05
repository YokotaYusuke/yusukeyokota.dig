const targetElement = document.querySelectorAll(".animationTarget");

// console.log("画面の高さ", window.innerHeight);

document.addEventListener("scroll", function() {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].
    getBoundingClientRect().top + targetElement[i].clientHeight * .7
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
});



// 追加
// ---------------------------------------------------------------------------------
// 画像クリックで拡大できるライブラリ「Medium Zoom」・・・アニメーションへ干渉してしまう。上手くいかない断念

// mediumZoom(document.querySelectorAll(".mordal-image > img"), {
// 	margin: 24,
// 	background: '#292d3d',
// 	scrollOffset: 0,
// });

// mediumZoom('[data-zoomable]')

// ---------------------------------------------------------------------------------
// 画像を拡大してモーダルダイアログにポップアップ表示させる「Lightbox2」
// --->上手くいった！

// ---------------------------------------------------------------------------------

// function alertImage() {
//   window.alert("hello");
//   document.getElementsByClassName("mordal-image")[0].height = 100; 
//   document.getElementsByClassName("mordal-image")[0].width = auto; 
// }

// const target = document.querySelectorAll(".mordal-image")[0];



// target.addEventListener("click", alertImage);


// ---------------------------------------------------------------------------------





































