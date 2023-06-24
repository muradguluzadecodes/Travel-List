export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const itemNums = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / itemNums) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You've got everything. Ready to go! ✈️"
          : ` 💼 You have ${itemNums} items in your list. You already packed
          ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
