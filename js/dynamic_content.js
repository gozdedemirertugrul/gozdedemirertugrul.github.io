window.addEventListener('DOMContentLoaded', function() {
    // Header Content Include
    var headerDiv = document.getElementById('site_header');
    var headerRequest = new XMLHttpRequest();
    headerRequest.open('GET', '/_includes/header_blog.html', true);
    headerRequest.onreadystatechange = function() {
      if (headerRequest.readyState === 4 && headerRequest.status === 200) {
        headerDiv.innerHTML = headerRequest.responseText;
      }
    };
    headerRequest.send();
    

    //Navbar Content Include
    var navbarDiv = document.getElementById('site_navbar');
    var navbarRequest = new XMLHttpRequest();
    navbarRequest.open('GET', '/_includes/navbar_template.html', true);
    navbarRequest.onreadystatechange = function() {
      if (navbarRequest.readyState === 4 && navbarRequest.status === 200) {
        navbarDiv.innerHTML = navbarRequest.responseText;
      }
    };
    navbarRequest.send();

    //Footer Content Include
    var footerDiv = document.getElementById('site_footer');
    var footerRequest = new XMLHttpRequest();
    footerRequest.open('GET', '/_includes/footer_blog.html', true);
    footerRequest.onreadystatechange = function() {
      if (footerRequest.readyState === 4 && footerRequest.status === 200) {
        footerDiv.innerHTML = footerRequest.responseText;
      }
    };
    footerRequest.send();
  });
  