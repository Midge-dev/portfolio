import Image from 'next/image'
import Link from 'next/link';
import { findDOMNode } from 'react-dom';
import myImage from '../public/FB_IMG_1620331899007.jpg';
import HoverLink from './HoverLink';

export default function Header({refs, scrollTo, openModal}) {

	const executeScroll = (id) => {
		if (id === refs.aboutSectionRef.current.id) {
			scrollTo(refs.aboutSectionRef);
		}
		if (id === refs.contactSectionRef.current.id) {
			scrollTo(refs.contactSectionRef);
		}
	};

	return (
		<header className="text-stone-200 flex bg-stone-800 p-4 sticky top-0 justify-between items-center z-10">
			<div onClick={() => openModal()}>
				<a className="text-xl font-bold flex items-center pl-8">
					{/* <img src={''} alt="Sean" /> */}
					<Image src={myImage} width={56} height={56} className=" rounded-full" alt='Sean' />
					<span className='ml-4'>Sean Midgley</span>
				</a>
			</div>
			<nav>
				<ul className='flex gap-4'>
				<li>
						<HoverLink bgColor="bg-transparant" id='aboutme' onClick={executeScroll}>About Me</HoverLink>
					</li>
					<li>
						<HoverLink bgColor="bg-transparant" id='contact' onClick={executeScroll} >Contact</HoverLink>
					</li>
					
				</ul>
			</nav>
		</header>
	);
}
