function getCookieValue(cookieName) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      const cookieValue = cookie.substring(name.length, cookie.length);
      return cookieValue === "true"; // Convert the string back to a boolean
    }
  }
  return false; // Default value if the cookie doesn't exist
}

document.addEventListener("DOMContentLoaded", () => {
  const cookieBannerOpenValue = getCookieValue("cookieBannerOpenValue");
  const cookieButton = document.getElementById("cookie-btn");
  const cookieContainer = document.getElementById("cookie-notification");

  if (cookieBannerOpenValue) {
    cookieContainer.classList.remove("active");
  }

  cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    // Set the cookieBannerOpenValue cookie to true and expire it in 30 days
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    document.cookie = `cookieBannerOpenValue=true; expires=${expirationDate.toUTCString()}`;
  });
});
