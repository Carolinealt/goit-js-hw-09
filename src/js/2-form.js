const refs = {
  form: document.querySelector('.feedback-form'),
  emailForm: document.querySelector('[name="email"]'),
  messageForm: document.querySelector('[name="message"]'),
};
const { form, emailForm, messageForm } = refs;

const savedFields = localStorage.getItem('feedback-form-state');
const parcedJSON = savedFields ? JSON.parse(savedFields) : {};

emailForm.value = parcedJSON.email || '';
messageForm.value = parcedJSON.message || '';
const updatedData = {
  email: emailForm.value.trim(),
  message: messageForm.value.trim(),
};

form.addEventListener('input', e => {
  if (e.target === emailForm || e.target === messageForm) {
    updatedData[e.target.name] = e.target.value.trim();
  }

  localStorage.setItem(`feedback-form-state`, JSON.stringify(updatedData));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const email = emailForm.value.trim(); 
  const message = messageForm.value.trim(); 

  if (email && message) {
    const obj = { email, message };
    console.log(obj);
    form.reset();
    localStorage.clear();
  } else {
    console.log('Будь ласка, заповніть усі поля форми.');
  }
});
