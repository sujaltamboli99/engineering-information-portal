<script>
  const menuIcon = document.querySelector('.menu-icon');
  const navMenu = document.querySelector('nav ul');

  menuIcon.addEventListener('click', () => {
      navMenu.classList.toggle('active')
  });
</script>

function scrollToSlide(index) {
    const slider = document.querySelector('.slider');
    const cardWidth = document.querySelector('.testimonial-card').offsetWidth + 20;
    slider.scrollLeft = index * cardWidth;

    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
    document.querySelectorAll('.dot')[index].classList.add('active');
  }

  <script>
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTop.style.display = 'block'
    } else {
      backToTop.style.display = 'none'
    }
  });
</script>
