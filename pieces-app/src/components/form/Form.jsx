import FormInput from './FormInput';
import React from 'react';

const Form = ({ onSubmit, inputs }) => {
  return (
    <div className="container">
      <form onSubmit={onSubmit} className="flex-h">
        {inputs.map((input) => (
          <React.Fragment key={input.name}>
            <FormInput name={input.name} placeholder={input.placeholder} />
          </React.Fragment>
        ))}
        <div className="form-control">
          <button>Spara</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
