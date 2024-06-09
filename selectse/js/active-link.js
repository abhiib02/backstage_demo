 let LINKS = document.querySelectorAll('.nav-link');
 let DROPDOWNLINKS = document.querySelectorAll('.dropdown-item');

 const ALL_LINKS = [...LINKS, ...DROPDOWNLINKS];

 let CURRENT_URL = window.location.href;
 let CURRENT_URL_ARR = CURRENT_URL.split("/");

 ALL_LINKS.forEach((LINK) => {
     let LINK_ARR = LINK.href;
     LINK_ARR = LINK_ARR.split("/");
     (CURRENT_URL_ARR[3] == LINK_ARR[3]) ? LINK.classList.add('active'): '';
 });