export default function TabButton({ children, onSelect, isSelected }) {
  console.log("Tabbutton Is Renderinng");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}
