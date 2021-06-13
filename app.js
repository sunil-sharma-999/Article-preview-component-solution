const share = document.querySelector('.share');
const s1 = document.querySelector('.s1').style;
const s2 = document.querySelector('.s2').style;

share.addEventListener('click', () => {
  // desktop
  if (window.innerWidth > 800) {
    if (s2.visibility === 'hidden' || s2.visibility === '') {
      s2.visibility = 'visible';
    } else if (s2.visibility === 'visible') {
      s2.visibility = 'hidden';
      s1.visibility = 'visible';
    } else {
      console.log('Desktop: something went wrong!');
    }
    // mobile
  } else if (window.innerWidth <= 800) {
    if (s1.visibility === '' || s1.visibility === 'visible') {
      s1.visibility = 'hidden';
      s2.visibility = 'visible';
    } else {
      s2.visibility = 'hidden';
      s1.visibility = 'visible';
    }
  } else {
    console.log('Mobile: something went wrong!');
  }
});
