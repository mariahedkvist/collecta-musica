const FormInput = ({ name, placeholder }) => {
  return (
    <div className="form-control">
      <input type="text" name={name} placeholder={placeholder} />
    </div>
  );
};

export default FormInput;
