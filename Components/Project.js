import React from 'react';
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import HoverLink from './HoverLink';
import Link from 'next/link';
export default function Project({ url, fallbackImageSrc, title, description, caseStudyRoute }) {
	return (
		<div className="flex justify-center flex-col md:flex-row gap-4 w-auto h-auto drop-shadow-md ">
			<div className='w-[320px] sm:w-1/3 h-auto mx-auto px-4'>
			<LinkPreview url={url} width="100%" fallbackImageSrc={fallbackImageSrc} />
			</div>
			
			<div className='w-2/3 mx-auto'>
				<h3 className="text-xl font-bold sm:text-center">{title}</h3>
				<p className='py-6 w-full'>{description}</p>
				<div className="flex justify-end sm:justify-center p-4">
					<Link passHref href={caseStudyRoute}>
					<HoverLink type='Link' url={caseStudyRoute} className='sm:flex justify-center'>Case Study</HoverLink>
					</Link>
				</div>
			</div>
		</div>
	);
}
