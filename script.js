const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll('[data-discord-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const status = document.querySelector('[data-copy-status]');

    try {
      await navigator.clipboard.writeText('darcauo');
      if (status) status.textContent = 'Username copied.';
    } catch (error) {
      if (status) {
        status.textContent = 'Copy unavailable. Select and copy @darcauo.';
      }
      console.error('Could not copy Discord username to clipboard.', error);
    }
  });
});
