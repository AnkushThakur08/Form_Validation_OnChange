import React, { useState } from 'react';

// React Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var temp1, temp2;
const App = () => {
  const [values, setValues] = useState({
    minValue: '',
    maxValue: '',
    tryData: '',
  });

  const { minValue, maxValue, tryData } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
    console.log(event.target.value.length);
    console.log(event.target.value, 'VALUE');

    console.log(values, 'STATE');

    // if (minValue || maxValue) {
    //   const validation = new RegExp('[+-]?([0-9]*[.])?[0-9]+');

    //   const textCase1 = validation.test(minValue);
    //   const textCase2 = validation.test(maxValue);

    //   console.log(textCase1);
    //   console.log(textCase2);

    //   if (!textCase1 && !textCase2) {
    //     /* If both are False */
    //     return toast.error('Input Must be in Number');
    //   }

    //   if (event.target.value.length > 4) {
    //     return toast.error('Value should range between 00.00 - 99.99');
    //   }

    //   if (maxValue <= '99') {
    //     temp1 = Math.round(maxValue).toFixed(2);
    //     console.log(temp1);
    //   } else {
    //     temp2 = maxValue / Math.pow(10, maxValue.length - 2);
    //     console.log(temp2);
    //   }
    // }

    if (event.target.value) {
      // const validation = new RegExp('[+-]?([0-9]*[.])?[0-9]+');
      const validation = event.target.value.replace(/[^\d]/g, '');

      const textCase = validation.test(event.target.value);

      // console.log(textCase);

      if (!textCase) {
        /* If both are False */
        return toast.error('Input Must be in Number');
      }

      if (event.target.value.length > 4) {
        return toast.error('Value should range between 00.00 - 99.99');
      }

      if (event.target.value <= 99) {
        temp1 = Math.round(event.target.value).toFixed(2);
        console.log(temp1);
      } else {
        console.log('HERE');

        temp2 =
          event.target.value / Math.pow(10, event.target.value.length - 2);
        console.log(temp2);

        setValues({ ...values });
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!minValue && !maxValue) {
      /* If Both are Empty */
      return toast.warning('Please Enter min or max price');
    }

    // if (minValue || maxValue) {
    //   const validation = new RegExp('[+-]?([0-9]*[.])?[0-9]+');

    //   const textCase1 = validation.test(minValue);
    //   const textCase2 = validation.test(maxValue);

    //   console.log(textCase1);
    //   console.log(textCase2);

    //   if (!textCase1 && !textCase2) {
    //     /* If both are False */
    //     return toast.error('Invalid Input');
    //   }

    //   if (maxValue.length > 4) {
    //     return toast.error('Value should range between 00.00 - 99.99');
    //   }

    //   if (maxValue <= '99') {
    //     temp1 = Math.round(maxValue).toFixed(2);
    //     console.log(temp1);
    //   } else {
    //     temp2 = maxValue / Math.pow(10, maxValue.length - 2);
    //     console.log(temp2);
    //   }
    // }
  };

  return (
    <div>
      <ToastContainer position="top-right" />
      <form>
        <div className="form-group py-2">
          <label className="text-light">Min Price</label>
          <input
            onChange={handleChange('minValue')}
            value={minValue}
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group py-2">
          <label className="text-light">Max Price</label>
          <input
            onChange={handleChange('maxValue')}
            // value={maxValue}
            value={temp2 || maxValue}
            className="form-control"
            type="text"
            id="textField"
          />

          <p>{temp1}</p>
          <p>{temp2}</p>
        </div>

        <div className="d-grid py-3">
          <button
            onClick={onSubmit}
            className="btn btn-success btn-lg"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
