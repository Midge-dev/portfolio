export default function MenuIcon({ onClick, isExpanded }) {
  return (
    <>
      <input
        onChange={(e) => onClick(e.target.checked)}
        type="checkbox"
        id="checkbox"
        checked={isExpanded}
        className="checkbox visuallyHidden"
      />
      <label htmlFor="checkbox" className="cursor-pointer">
        <div className="mx-auto relative h-[30px] w-[30px] hamburger">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className={`bar bar${i + 1}`}></span>
          ))}
        </div>
      </label>
    </>
  );
}
