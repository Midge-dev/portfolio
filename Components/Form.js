import HoverLink from "./HoverLink";

export default function Form() {
	return (
		<div className="max-w-prose mx-auto bg-stone-200 p-6 shadow-lg shadow-black text-black rounded-lg">
			<form className="flex flex-col w-full">
				<label className="mt-4">
					<span className="text-stone-800 font-bold mb-2 block text-sm">Name</span>
					<input type="text" name="name" className="w-full p-4" placeholder="Enter Name" />
				</label>
				<label className="mt-4 block w-full"><span className="text-stone-800 font-bold mb-2 block text-sm">Email</span>
					<input type="text" name="email" className="w-full p-4" placeholder="Enter Email" />
				</label>
				<label className="mt-4"><span className="text-stone-800 font-bold mb-2 block text-sm">Message</span>
					<textarea type="text" name="name" className="w-full p-4 h-36" placeholder="Enter Message" />
				</label>
                <HoverLink className="text-center mt-6">Submit</HoverLink>
			</form>
		</div>
	);
}
