export default function Header({ children }) {
  return (
    <header className="flex flex-col py-5 bg-gray-400 text-white text-center">
      <span className="ml-1 text-3xl text-white font-semibold">{children}</span>
    </header>
  );
}
