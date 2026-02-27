document.addEventListener('DOMContentLoaded', () => {
  const detailsList = document.querySelectorAll('.project-details');

  detailsList.forEach((details) => {
    const content = details.querySelector('.details-content');

    // 초기 상태
    if (!details.open) {
      content.style.height = '0px';
      content.style.opacity = '0';
    } else {
      const fullHeight = content.scrollHeight;
      content.style.height = fullHeight + 'px';
      content.style.opacity = '1';
    }

    details.addEventListener('click', (e) => {
      const summary = e.target.closest('summary');
      if (!summary || !details.contains(summary)) return;

      e.preventDefault(); // 기본 토글 막고 우리가 제어

      const isOpen = details.hasAttribute('open');

      if (!isOpen) {
        // 열기
        details.setAttribute('open', 'true');
        const fullHeight = content.scrollHeight;

        content.style.height = '0px';
        content.style.opacity = '0';

        requestAnimationFrame(() => {
          content.style.height = fullHeight + 'px';
          content.style.opacity = '1';
        });
      } else {
        // 닫기
        const fullHeight = content.scrollHeight;
        content.style.height = fullHeight + 'px';
        content.style.opacity = '1';

        requestAnimationFrame(() => {
          content.style.height = '0px';
          content.style.opacity = '0';
        });

        const onTransitionEnd = (ev) => {
          if (ev.propertyName === 'height') {
            details.removeAttribute('open');
            content.removeEventListener('transitionend', onTransitionEnd);
          }
        };
        content.addEventListener('transitionend', onTransitionEnd);
      }
    });
  });
});






const indexTab = document.getElementById('index-tab');
  const cvTab = document.getElementById('cv-tab');
  const indexSection = document.getElementById('index-section');
  const cvSection = document.getElementById('cv-section');

  // 초기 상태: Index가 보이니까 Index를 활성 탭으로
  indexTab.classList.add('active-tab');

  indexTab.addEventListener('click', function (e) {
    e.preventDefault();
    indexSection.style.display = 'block';
    cvSection.style.display = 'none';

    indexTab.classList.add('active-tab');
    cvTab.classList.remove('active-tab');
  });

  cvTab.addEventListener('click', function (e) {
    e.preventDefault();
    indexSection.style.display = 'none';
    cvSection.style.display = 'block';

    cvTab.classList.add('active-tab');
    indexTab.classList.remove('active-tab');
  });



