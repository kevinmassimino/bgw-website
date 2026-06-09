// Change this password before publishing.
const SITE_PASSWORD = 'BGW2026';

function checkPassword() {
  const input = document.getElementById('passwordInput').value;
  const message = document.getElementById('passwordMessage');
  if (input === SITE_PASSWORD) {
    localStorage.setItem('bgwAccess', 'true');
    document.getElementById('gate').classList.add('hidden');
    document.getElementById('site').classList.remove('hidden');
  } else {
    message.textContent = 'Wrong password. Try again.';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('bgwAccess') === 'true') {
    document.getElementById('gate').classList.add('hidden');
    document.getElementById('site').classList.remove('hidden');
  }
  document.getElementById('passwordInput').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') checkPassword();
  });
});
