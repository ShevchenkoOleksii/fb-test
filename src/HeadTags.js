import React from 'react';
import Helmet from "react-helmet";

export const HeadTags = (props) => {
	// const imageUrl = 'https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=';
	const imageUrl = 'https://res.cloudinary.com/doghotelua/image/upload/v1581456521/blog/108_nft7ng.jpg';
	const {
		title = "Portfolio - your name",
		metaDescription = "default description",
	} = props;
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="description" key="description" content={metaDescription} />
			<meta name="title" key="title" content={title} />
			<meta property="og:title" key="og:title" content={title} />
			<meta property="og:locale" key="og:locale" content="en_US" />
			<meta charSet="utf-8" />
			<meta property="og:type" key="og:type" content="website" />
			<meta
				property="og:description"
				key="og:description"
				content={metaDescription} />
			<meta
				property="og:image"
				key="og:image"
				content="https://res.cloudinary.com/doghotelua/image/upload/v1581456521/blog/108_nft7ng.jpg" />
			<meta property="og:image:alt" content="some alt text" />
			<meta property="og:image:type" content="image/jpeg" />
			<meta property="og:image:width" content="400" />
			<meta property="og:image:height" content="300" />
		</Helmet>
	);
};
