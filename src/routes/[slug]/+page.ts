import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params: { slug } }) => {
	return (await fetch('https://api.funnyboyroks.com/blog/posts/' + encodeURI(slug))).json();
};
