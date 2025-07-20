document.addEventListener('DOMContentLoaded', () => {
  const question = document.getElementById('question');
  const yesBtn = document.getElementById('yes-btn');
  const noBtn = document.getElementById('no-btn');
  const container = document.getElementById('container');
  const gifVideo = document.getElementById('gif_video');
  let isSecondQuestion = false;

  const moveButton = () => {
    const containerRect = document.body.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    let newTop = Math.random() * (containerRect.height - btnRect.height);
    let newLeft = Math.random() * (containerRect.width - btnRect.width);

    // Ensure the button stays within the viewport
    newTop = Math.max(0, Math.min(newTop, containerRect.height - btnRect.height));
    newLeft = Math.max(0, Math.min(newLeft, containerRect.width - btnRect.width));

    noBtn.style.position = 'fixed';
    noBtn.style.top = `${newTop}px`;
    noBtn.style.left = `${newLeft}px`;
    noBtn.style.right = ''; // Reset right position to avoid conflicts
    noBtn.style.bottom = ''; // Reset bottom position to avoid conflicts
    noBtn.style.transition = 'top 0.3s, left 0.3s';
  };

  noBtn.addEventListener('mouseover', moveButton);
  noBtn.addEventListener('click', moveButton);

  yesBtn.addEventListener('click', () => {
    if (!isSecondQuestion) {
      question.textContent = 'hahhaha I love you too, wanna be my girlfriend?';
      isSecondQuestion = true;

      // Hapus elemen gif lama
      gifVideo.remove();

      // Buat elemen gif baru dengan data-postid baru
      const newGif = document.createElement('div');
      newGif.id = 'gif_video';
      newGif.className = 'tenor-gif-embed';
      newGif.setAttribute('data-postid', '5913713879540817573');
      newGif.setAttribute('data-aspect-ratio', '1');
      newGif.setAttribute('data-width', '10%');
      container.insertBefore(newGif, question);

      // Jalankan ulang script Tenor
      const tenorScript = document.createElement('script');
      tenorScript.type = 'text/javascript';
      tenorScript.async = true;
      tenorScript.src = 'https://tenor.com/embed.js';
      document.body.appendChild(tenorScript);

      noBtn.style.position = 'absolute';
      noBtn.style.top = '';
      noBtn.style.left = '';
      noBtn.style.right = '';
      noBtn.style.bottom = '';
      noBtn.style.transition = 'top 0.3s, left 0.3s';
    } else {
      container.innerHTML = ''; // Clear the initial content
      const fullscreenDiv = document.createElement('div');
      fullscreenDiv.classList.add('fullscreen');

      const fullscreenText = document.createElement('h1');
      fullscreenText.textContent = 'You are my girlfriend right now😭😂';
      fullscreenText.classList.add('fullscreen-text');

      fullscreenDiv.appendChild(fullscreenText);
      document.body.appendChild(fullscreenDiv);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
  });
});