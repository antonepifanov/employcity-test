import noUiSlider from 'nouislider';

export const initRange = () => {
  const range = document.querySelector('.range');
  if (!range) {
    return;
  }

  const rangeInput = document.querySelector('input[name=range]');

  const init = () => {
    noUiSlider.create(range, {
      start: 75,
      step: 1,
      connect: [true, false],
      format: {
        to: (value) => {
          if (Number.isInteger(value)) {
            return value.toFixed(0);
          }
          return value.toFixed(1);
        },
        from: (value) => {
          return parseInt(value, 10);
        },
      },
      range: {
        min: [1],
        max: [100],
      },
      orientation: 'horizontal',
      updateMode: 'drag',
    });

    range.noUiSlider.on('update',
        (values, handle) => (
          rangeInput.value = parseInt(values[handle], 10) + '%'
        )
    );
  };

  init();
};
