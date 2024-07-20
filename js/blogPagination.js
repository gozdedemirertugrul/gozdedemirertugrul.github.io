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