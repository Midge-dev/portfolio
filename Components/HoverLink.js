export default function HoverLink({ children, href, bgColor="bg-black", textColor="text-white", className="" }) {
    const defaultClass= !className.length ? "inline-block mt-4" : className;
	return (
		<a
			href={href}
			className={` ${bgColor} ${defaultClass} ${textColor} py-2 px-8 rounded-xl font-bold duration-300 transition-transform ease-out hover:-translate-y-2`}
		>
			{children}
		</a>
	);
}
