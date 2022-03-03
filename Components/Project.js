import React from 'react';
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import HoverLink from './HoverLink';

export default function Project({ url, fallbackImageSrc, title, description }) {
	return (
		<div className="flex flex-col md:flex-row gap-4 w-auto h-auto drop-shadow-md ">
			<LinkPreview url={url} width="320px" fallbackImageSrc={fallbackImageSrc} />
			<div className='max-w-[65vw]'>
				<h3 className="text-xl font-bold">{title}</h3>
				<p className='py-6'>{description}</p>
				<div className="flex justify-end">
					<HoverLink>Case Study</HoverLink>
				</div>
			</div>
		</div>
	);
}
