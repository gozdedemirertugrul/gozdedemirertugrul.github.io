window.addEventListener('DOMContentLoaded', (event) => {
  const blogsArea = document.getElementById('blog_content_area');
  const paginationDiv = document.getElementById('pagination');
  const blogList = Array.from(blogsArea.getElementsByClassName('card'));

  const blogDisplayOnePage = 6;
  const totalPage = Math.ceil(blogList.length / blogDisplayOnePage);

  for (let page = 1; page <= totalPage; page++) {
    const pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.textContent = page;
    pageLink.classList.add('page-link');

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

    blogsArea.classList.add('fade-out');
    setTimeout(() => {
      for (let i = 0; i < blogList.length; i++) {
        const parentDiv = blogList[i].parentElement;
        parentDiv.style.visibility = 'hidden';
        parentDiv.style.position = 'absolute';
        parentDiv.style.height = '0';
      }

      for (let i = firstIndex; i < lastIndex && i < blogList.length; i++) {
        const parentDiv = blogList[i].parentElement;
        parentDiv.style.visibility = 'visible';
        parentDiv.style.position = 'static';
        parentDiv.style.height = 'auto';
      }

      blogsArea.classList.remove('fade-out');
      blogsArea.classList.add('fade-in');
    }, 300);
  }
});