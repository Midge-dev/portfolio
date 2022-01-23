import Image from 'next/image'
import Link from 'next/link';
import myImage from '../public/FB_IMG_1620331899007.jpg';

export default function Header() {
	return (
		<header className="text-stone-200 flex bg-stone-800 p-4 sticky top-0 justify-between items-center z-10">
			<Link href="/">
				<a className="text-xl font-bold flex items-center pl-8">
					{/* <img src={''} alt="Sean" /> */}
					<Image src={myImage} width={56} height={56} className=" rounded-full" alt='Sean' />
					<span className='ml-4'>Sean Midgley</span>
				</a>
			</Link>
			<nav>
				<ul className='flex gap-4'>
				<li>
						<a href="#aboutme">About Me</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
					
				</ul>
			</nav>
		</header>
	);
}
