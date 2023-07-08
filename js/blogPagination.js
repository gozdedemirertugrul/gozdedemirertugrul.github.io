//page loading work this code
window.addEventListener('DOMContentLoaded', (event) => {
  // All blog div - content
  const blogsArea = document.getElementById('blog_content_area');

  //Pagination div
  const paginationDiv = document.getElementById('pagination');

  // Blog list
  const blogList = blogsArea.getElementsByClassName('card');

  // Display One Page Blog Number
  const blogDisplayOnePage = 5;
  const totalPage = Math.ceil(blogList.length / blogDisplayOnePage);

  // Pagination link create
  for (let page = 1; page <= totalPage; page++) {
    const pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.textContent = page;
    pageLink.classList.add('page-link');

    // Click event and update blogs content
    pageLink.addEventListener('click', (event) => {
      event.preventDefault();
      blogPageUpdate(page);
    });

    paginationDiv.appendChild(pageLink);
  }

  // Show first page blogs
  blogPageUpdate(1);

  // Belirli bir sayfada gösterilecek blogları güncelle
  function blogPageUpdate(page) {
    const firstIndex = (page - 1) * blogDisplayOnePage;
    const lastIndex = firstIndex + blogDisplayOnePage;

    // Tüm blogları gizle
    for (let i = 0; i < blogList.length; i++) {
      blogList[i].style.display = 'none';
    }

    // Gösterilecek blogları göster
    for (let i = firstIndex; i < lastIndex && i < blogList.length; i++) {
      blogList[i].style.display = 'block';
    }
  }
});
