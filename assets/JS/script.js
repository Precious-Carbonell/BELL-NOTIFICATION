const button = document.getElementById('_button');
const notification = document.getElementById('_notification');
const bell = document.getElementById('_bell');
const container = document.getElementById('_container');
let clickCount = 0;

button.addEventListener('click', () => {
    clickCount++;

    if (clickCount < 12) {
        // Play 'wedbell.mp3' for the first 11 clicks
        const audio = new Audio('../assets/sounds/wedbell.mp3');
        audio.play();
    } else if (clickCount === 12) {
        // After 12 clicks, replace the background and play 'wedding.mp4'
        container.style.background = 'url("../assets/images/church.jpg") center/cover no-repeat fixed';
        container.innerHTML = '<video id="_video" width="100%" height="100%" controls autoplay><source src="../assets/video/wedding.mp4" type="video/mp4"></video>';
    }

    // Update the notification count
    notification.setAttribute('data-count', clickCount);
    notification.classList.add('count');
    notification.classList.add('notify');
    bell.classList.add('shake'); // Add the shake class to the bell
    button.classList.add('active');
});

bell.addEventListener('animationend', () => {
  bell.classList.remove('shake'); // Remove the shake class when the animation ends
});

notification.addEventListener('animationend', () => {
  notification.classList.remove('notify');
  button.classList.remove('active');
});
