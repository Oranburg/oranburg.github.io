// Highlight the current nav link based on the page path
(function () {
  var path = window.location.pathname;
  var links = document.querySelectorAll('.site-nav a');
  links.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === '/' ? path === '/' : path.indexOf(href) === 0) {
      link.setAttribute('aria-current', 'page');
    }
  });
})();
