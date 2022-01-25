export default function HoverLink({
	children,
	id,
	bgColor = 'bg-black',
	textColor = 'text-white',
	className = '',
	onClick = () => {}
}) {
	const defaultClass = !className.length ? 'inline-block mt-4' : className;
	return (
		<button
			className={` ${bgColor} ${defaultClass} ${textColor} py-2 px-8 rounded-xl font-bold duration-300 transition-transform ease-out hover:-translate-y-2`}
			onClick={() => onClick(id)}
		>
			{children}
		</button>
	);
}
