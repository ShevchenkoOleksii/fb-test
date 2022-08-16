import React from 'react';
import Helmet from "react-helmet";

export const HeadTags = (props) => {
	// const imageUrl = 'https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=';
	// const imageUrl = 'https://res.cloudinary.com/doghotelua/image/upload/v1581456521/blog/108_nft7ng.jpg';
	const imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/15/08/blank-792125__340.jpg';
	const {
		title = "Portfolio - your name",
		metaDescription = "default description",
	} = props;
	return (
		<Helmet>
			<meta charSet="UTF-8"/>
			<meta name="viewport"
						content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
			<meta http-equiv="X-UA-Compatible" content="ie=edge"/>
			<title>{title}</title>
			<meta property="og:title" content={title} />
			<meta name="og:url" content="https://fb-test-app-v1.herokuapp.com/" />
			<meta
				property="og:image"
				content={imageUrl} />
			<meta property="og:type" content="website" />
			<meta
				property="og:description"
				content={metaDescription} />
		</Helmet>
	);
};
