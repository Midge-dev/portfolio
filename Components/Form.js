import HoverLink from './HoverLink';
import { useState } from 'react';

export default function Form() {
	const [ formData, setFormData ] = useState({ name: '', email: '', message: '' });
	const handleSubmit = (e) => {
		// let formData = new FormData(myForm);
		const obj = {
			'form-name': 'contact',
			...formData
		};
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(obj).toString()
		})
			.then((res) => {
				setFormData({ name: '', email: '', message: '' });
			})
			.catch((error) => alert(error))
			.finally(() => {
				
			});
		e.preventDefault();
		e.stopPropagation();
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div className="max-w-prose mx-auto bg-stone-200 p-6 shadow-lg shadow-black text-black rounded-lg">
			<form
				className="flex flex-col w-full"
				// method="POST"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
				onSubmit={handleSubmit}
				name="contact"
			>
				<input type="hidden" name="form-name" value="contact" />
				<label className="mt-4">
					<span className="text-stone-800 font-bold mb-2 block text-sm">Name</span>
					<input
						onChange={handleChange}
						type="text"
						name="name"
						value={formData.name}
						className="w-full p-4"
						placeholder="Enter Name"
					/>
				</label>
				<label className="mt-4 block w-full">
					<span className="text-stone-800 font-bold mb-2 block text-sm">Email</span>
					<input
						onChange={handleChange}
						type="email"
						name="email"
						value={formData.email}
						className="w-full p-4"
						placeholder="Enter Email"
					/>
				</label>
				<label className="mt-4">
					<span className="text-stone-800 font-bold mb-2 block text-sm">Message</span>
					<textarea
						onChange={handleChange}
						name="message"
						value={formData.message}
						className="w-full p-4 h-36"
						placeholder="Enter Message"
					/>
				</label>
				<HoverLink className="text-center mt-6">Submit</HoverLink>
			</form>
		</div>
	);
}
