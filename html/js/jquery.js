// メインビジュアル画像切り替え
$(function () {
  $(".fade-img picture:not(:first-child)").hide();
  setInterval(function () {
    $(".fade-img picture:first-child").fadeOut("slow").next("picture").fadeIn("slow").end().appendTo(".fade-img");
  }, 5000);

  // スムーズスクロール トップに戻る
  $('.btn-wrapper').on('click', function () {
    $('body,html').animate({ scrollTop: 0 }, 500);
    return false;
  });

  // スクロールボタンで.profileまでスクロール
  $('.main-visual__scroll').on('click', function () {
    $('.container').slideDown(800);
    $("html,body").animate({ scrollTop: $('.profile').offset().top }, 2000);
    return false;
  });

  // PROFILEボタンで.profileまでスクロール
  $('.profile-btn').on('click', function () {
    $('.container').slideDown(800);
    $("html,body").animate({ scrollTop: $('.profile').offset().top }, 2000);
    return false;
  });

  // WORKSボタンで.workまでスクロール
  $('.works-btn').on('click', function () {
    $('.container').slideDown(800);
    $("html,body").animate({ scrollTop: $('.work').offset().top }, 2000);
    return false;
  });

  // CONTACTボタンで.contactまでスクロール
  $('.contact-btn').on('click', function () {
    $('.container').slideDown(800);
    $("html,body").animate({ scrollTop: $('.contact').offset().top }, 2000);
    return false;
  });
});
