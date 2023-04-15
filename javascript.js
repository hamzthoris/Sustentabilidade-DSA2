function acceptCookies() {
  const cookieBanner = document.getElementById('cookie-banner');
  cookieBanner.style.display = 'none';
  localStorage.setItem('cookieBannerDisplayed', 'true');
}

window.onload = function() {
  const isCookieBannerDisplayed = localStorage.getItem('cookieBannerDisplayed');
  const cookieBanner = document.getElementById('cookie-banner');
  if (!isCookieBannerDisplayed) {
    cookieBanner.style.display = 'flex';
  }
};