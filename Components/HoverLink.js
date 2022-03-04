export default function HoverLink({
	children,
	id,
	bgColor = 'bg-black',
	textColor = 'text-white',
	className = '',
	onClick = () => {},
	url,
	type = 'button',
	download = false,
}) {
	const defaultClass = !className.length ? 'inline-block mt-4' : className;
	return type === 'button' ? (
		<button
			className={` ${bgColor} ${defaultClass} ${textColor} py-2 px-8 rounded-xl font-bold duration-500 transition-transform ease-out hover:-translate-y-2 drop-shadow-md`}
			onClick={(e) => onClick(e, id)}
		>
			{children}
		</button>
	) : (
		<a className={`${bgColor} ${defaultClass} ${textColor} py-2 px-8 rounded-xl font-bold duration-300 transition-transform ease-out hover:-translate-y-2`} href={url} download={download} >{children}</a>
	)
}
