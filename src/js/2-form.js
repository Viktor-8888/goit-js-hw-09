let formData = { email: '', message: '' };
const feedbackForm = document.querySelector('form.feedback-form');
const savedformData = localStorage.getItem('feedback-form-state');
if (savedformData !== null) {
  formData = JSON.parse(savedformData);
  feedbackForm.elements.email.value = formData.email;
  feedbackForm.elements.message.value = formData.message;
}
feedbackForm.addEventListener('input', dataForm);
function dataForm(event) {
  const input = event.target;
  formData[input.name] = input.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
feedbackForm.addEventListener('submit', submitForm);
function submitForm(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  formData.email = '';
  formData.message = '';
  feedbackForm.reset();
  localStorage.removeItem('feedback-form-state');
}
