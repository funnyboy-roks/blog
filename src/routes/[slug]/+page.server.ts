import type { PageServerLoad } from './$types';
import { render } from './markdown';

export const load: PageServerLoad = async ({ params: { slug } }) => {
	let json = await (await fetch('https://api.funnyboyroks.com/blog/' + encodeURI(slug))).json();


    json.renderedContent = render(json.content);

    return json;
};
