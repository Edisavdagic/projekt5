
const slider = document.getElementById('prisSlider');
const value1Display = document.getElementById('value1');
const value2Display = document.getElementById('value2');
let prevValue1 = 0;
let prevValue2 = 0;

slider.addEventListener('input', function() {
  const value1 = parseInt(slider.value);
  const value2 = prevValue2 + (value1 - prevValue1) * 700;

  const values = [value1, value2];
  updateOutputValues(values);

  prevValue1 = value1;
  prevValue2 = value2;
});

function updateOutputValues(values) {
    value1Display.textContent = values[0];
    
    if (values[1] >= 0) {
      value2Display.textContent = values[1];
    } else {
      value2Display.textContent = 0;
    }
  }
  

