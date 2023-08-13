function InputForm(props) {
  const { value, name, label, onChange, type } = props;
  return (
    <>
      <span>
        <label htmlFor={name}>{label}</label>
        <input value={value} name={name} type={type} onChange={onChange} />
      </span>
      <hr />
    </>
  );
}

export default InputForm;
