export default function Label({
  idLabel,
  receiveInput,
  textLabel = 'texto do Label',
}) {
  return (
    <label
      htmlFor={idLabel}
      className="  container flex-auto block text-black font-bold md:text-center mb-1 md:mb-0 pr-4"
    >
      {textLabel}
    </label>
  );
}
