'use strict';

// element toggle function
const elementToggleFunc = function (elem) { 
  if(elem) elem.classList.toggle("active"); 
}

// ----------------- Sidebar -----------------
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () { 
    elementToggleFunc(sidebar); 
  });
}

// ----------------- Testimonials Modal -----------------
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  if(modalContainer) modalContainer.classList.toggle("active");
  if(overlay) overlay.classList.toggle("active");
}

if(testimonialsItem.length > 0) {
  testimonialsItem.forEach(item => {
    item.addEventListener("click", function () {
      if(modalImg) modalImg.src = this.querySelector("[data-testimonials-avatar]")?.src || "";
      if(modalImg) modalImg.alt = this.querySelector("[data-testimonials-avatar]")?.alt || "";
      if(modalTitle) modalTitle.innerHTML = this.querySelector("[data-testimonials-title]")?.innerHTML || "";
      if(modalText) modalText.innerHTML = this.querySelector("[data-testimonials-text]")?.innerHTML || "";
      testimonialsModalFunc();
    });
  });
}

if(modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if(overlay) overlay.addEventListener("click", testimonialsModalFunc);

// ----------------- Custom Select -----------------
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]"); // check typo!
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if(select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

if(selectItems.length > 0 && selectValue) {
  selectItems.forEach(item => {
    item.addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });
}

// ----------------- Filter -----------------
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    if(selectedValue === "all") {
      item.classList.add("active");
    } else if(selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

if(filterBtn.length > 0) {
  let lastClickedBtn = filterBtn[0];
  filterBtn.forEach(btn => {
    btn.addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      if(selectValue) selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      if(lastClickedBtn) lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  });
}

// ----------------- Contact Form -----------------
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if(form && formInputs.length > 0 && formBtn) {
  formInputs.forEach(input => {
    input.addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  });
}

 // ----------------- Page Navigation (with hash support) -----------------
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

if(navigationLinks.length > 0 && pages.length > 0) {

  const showPage = (pageName) => {
    pages.forEach((page, i) => {
      if(page.dataset.page === pageName) {
        page.classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0,0);
      } else {
        page.classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    });
  };

  // Show page based on current URL hash
  const currentHash = window.location.hash.slice(1); // remove '#'
  if(currentHash) showPage(currentHash);
  else showPage("about"); // default

  // Add click listeners to nav links
  navigationLinks.forEach((link, index) => {
    link.addEventListener("click", function () {
      const targetPage = link.innerHTML.toLowerCase();
      showPage(targetPage);

      // Update URL hash without reloading
      history.pushState(null, "", `#${targetPage}`);
    });
  });

  // Handle back/forward buttons
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.slice(1);
    if(hash) showPage(hash);
  });

}