window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var heartShape = document.querySelector('.heart-shape');
  heartShape.style.transform = 'scale(' + (1 + scrollPosition/1000) + ')';

  var animationPause = 1 - (scrollPosition/500);
  heartShape.style.animationPlayState = animationPause < 0 ? 'paused' : 'running';
  heartShape.style.animationDelay = animationPause + 's';
});
