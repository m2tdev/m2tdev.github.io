window.onload = () => {
  const player = document.querySelector('.player');
  const video = player.querySelector('.viewer');
  const progress = player.querySelector('.progress');
  const progressBar = player.querySelector('.progress__filled');
  const toggle = player.querySelector('.toggle');
  const skipButtons = player.querySelectorAll('[data-skip]');
  const ranges = player.querySelectorAll('.player__slider');

  let isRangeDragging = false;
  let isProgressDragging = false;

  function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  }

  function updateButton() {
    const icon = this.paused ? '►' : '❚❚';
    toggle.innerHTML = icon;
  }

  function skip() {
    const skipTime = parseFloat(this.dataset.skip);
    video.currentTime += skipTime;
  }

  function handleRange() {
    if (!isRangeDragging) return;
    video[this.name] = this.value;
  }

  function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }

  function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }

  video.addEventListener('click', togglePlay);
  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);
  video.addEventListener('timeupdate', handleProgress);

  toggle.addEventListener('click', togglePlay);

  skipButtons.forEach((button) => button.addEventListener('click', skip));

  ranges.forEach((range) => range.addEventListener('change', handleRange));
  ranges.forEach((range) => range.addEventListener('mousemove', handleRange));
  ranges.forEach((range) =>
    range.addEventListener('mousedown', () => (isRangeDragging = true))
  );
  ranges.forEach((range) =>
    range.addEventListener('mouseup', () => (isRangeDragging = false))
  );

  progress.addEventListener('click', scrub);
  progress.addEventListener('mousemove', (e) => isProgressDragging && scrub(e));
  progress.addEventListener('mousedown', () => (isProgressDragging = true));
  progress.addEventListener('mouseup', () => (isProgressDragging = false));
};
