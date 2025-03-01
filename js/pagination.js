window.addEventListener('DOMContentLoaded', (event) => {
  const blogsArea = document.getElementById('blog_content_area');
  const paginationDiv = document.getElementById('pagination');
  const blogList = Array.from(blogsArea.getElementsByClassName('card'));

  const blogDisplayOnePage = 10;
  const totalPage = Math.ceil(blogList.length / blogDisplayOnePage);

  for (let page = 1; page <= totalPage; page++) {
    const pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.textContent = page;
    pageLink.classList.add('page-link');
    pageLink.style.color = 'var(--text-light)';

    pageLink.addEventListener('click', (event) => {
      event.preventDefault();
      blogPageUpdate(page);
    });

    paginationDiv.appendChild(pageLink);
  }

  blogPageUpdate(1);

  function blogPageUpdate(page) {
    const firstIndex = (page - 1) * blogDisplayOnePage;
    const lastIndex = firstIndex + blogDisplayOnePage;

    for (let i = 0; i < blogList.length; i++) {
      const parentDiv = blogList[i].parentElement;
      if (i >= firstIndex && i < lastIndex) {
        parentDiv.style.display = 'block';
      } else {
        parentDiv.style.display = 'none';
      }
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const prContainer = document.querySelector('#pr-section .row');
  const prItems = Array.from(prContainer.querySelectorAll('.timeline-item'));
  const paginationDiv = document.getElementById('pr-pagination');
  
  const itemsPerPage = 10;
  const totalPages = Math.ceil(prItems.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.textContent = i;
    pageLink.classList.add('page-link');
    pageLink.style.color = 'var(--text-light)';

    pageLink.addEventListener('click', (e) => {
      e.preventDefault();
      updatePage(i);
    });

    paginationDiv.appendChild(pageLink);
  }

  function updatePage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    prItems.forEach((item, index) => {
      item.style.display = index >= startIndex && index < endIndex ? 'block' : 'none';
    });
  }
  updatePage(1);
});