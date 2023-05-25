import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
        posts: (await (await fetch('https://api.funnyboyroks.com/blog/posts')).json()) as any[]
    };
};
