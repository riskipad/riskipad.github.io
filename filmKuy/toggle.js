document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-theme');
  
    toggleButton.addEventListener('click', () => {
      const htmlElement = document.documentElement;
  
      if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.theme = 'light';
      } else {
        htmlElement.classList.add('dark');
        localStorage.theme = 'dark';
      }
    });

  });
  