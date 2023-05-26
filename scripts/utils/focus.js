

  document.addEventListener('keydown', function(event) {
    const currentElement = document.activeElement;
    
    if (event.key === '2') {
      const nextElement = currentElement.nextElementSibling;
      if (nextElement) {
        nextElement.focus();
      }
    } else if (event.key === '8') {
      const previousElement = currentElement.previousElementSibling;
      if (previousElement) {
        previousElement.focus();
      }
    }
  });
