import {Form} from './modules/form-validate/form';
import {initBurger} from './modules/init-burger';
import {initRange} from './modules/init-range';
import {CustomSelect} from './modules/select/custom-select';
import {uploadFile} from './modules/input-upload/init-upload';
import {iosVhFix} from './utils/ios-vh-fix';

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  iosVhFix();
  initBurger();

  window.addEventListener('load', () => {
    const select = new CustomSelect();
    select.init();
    const form = new Form();
    window.form = form;
    form.init();
    initRange();
    uploadFile();
  });
});
