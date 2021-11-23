export default function Button({
  typeButton = 'submit',
  nameButton = 'Nome do botão',
  textButton = 'Texto do botão',
}) {
  return (
    <button
      className="  flex-auto py-1  mb-1 mt-1 container   bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold   rounded"
      type={typeButton}
      name={nameButton}
    >
      {textButton}
    </button>
  );
}
