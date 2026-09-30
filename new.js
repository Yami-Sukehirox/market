function showForm(formId) {
  document.querySelectorAll(".form").forEach(form => {
    form.classList.remove("active");
  });

  document.querySelector(`#${formId} .form`).classList.add("active");
}   