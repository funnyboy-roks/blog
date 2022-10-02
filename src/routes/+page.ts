import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
        posts: (await (await fetch('https://api.funnyboyroks.com/blog/posts')).json()) as any[]
    };
};
