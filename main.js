document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('focusin', (event) => {
  event.target.style.background = '#fbf8ec';    
  });
});

document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('focusout', (event) => {
  event.target.style.background = '';    
  });
});

document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('onmouseenter', (event) => {
      event.target.style.background = '#000000';
  });
});