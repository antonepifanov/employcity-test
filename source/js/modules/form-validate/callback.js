const baseSuccessCallback = (event) => {
  event.preventDefault();
  // В данном колбеке бэкендер, либо разработчик при необходимости будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки или успешную отправку формы на сервер
  const formData = Object.fromEntries(new FormData(event.target));
  const formResponse = document.querySelector('.form__response');
  formResponse.style.display = 'block';
  formResponse.innerHTML = `Форма отправлена<br>${Object.entries(formData).map(([key, value]) => `${key}: ${value}<br>`).join('')}`;
};

const baseErrorCallback = (event) => {
  event.preventDefault();
  // Данный коллбек используется при необходимости выполнить какое-либо действие помимо показа ошибок при попытке отправить неккорректные данные, он не связан с запросами на сервер
};

export const callbacks = {
  base: {
    // Сбросс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 300,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },
};
