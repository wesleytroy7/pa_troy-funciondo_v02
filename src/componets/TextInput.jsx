export default function TextInput({
  id = 'id_input',
  labelDescription = 'Descricao do label',
  keyUp = null,
  onInputChange = null,
  inputValue = 'Valor do input',
  typeInput = 'Tipo do Input',
  inputPlaceHolder,
  autoFocus = false,
}) {
  function handleInputChangeUp({ currentTarget }) {
    if (onInputChange) {
      currentTarget.maxLength = 5;
      let newValue = currentTarget.value;
      newValue = newValue.replace(/\D/g, '');
      newValue = newValue.replace(/^(\d{2})(\d)/, '$1.$2');
      currentTarget.value = newValue;
      onInputChange(newValue);
    }
  }

  return (
    <label
      htmlFor={id}
      className="space-x-40 min-h-full  align-content text-7xl border-2 border-dashed border-gray-400 bg-gray-100
    "
    >
      <span className=" flex flex-col my-4 text-center text-2xl ">
        {labelDescription}
      </span>
      <input
        id={id}
        autoFocus={autoFocus}
        className="border"
        type={typeInput}
        placeholder={inputPlaceHolder}
        value={inputValue}
        onChange={handleInputChangeUp}
      ></input>
    </label>
  );
}
