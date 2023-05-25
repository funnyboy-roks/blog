import MarkdownIt from 'markdown-it';

import texmath from '@traptitech/markdown-it-katex';
// @ts-expect-error No type for this import
import footnote from 'markdown-it-footnote';
import hljs from 'markdown-it-highlightjs';
// @ts-expect-error No type for this import
import abbr from 'markdown-it-abbr';
// @ts-expect-error No type for this import
import tasks from 'markdown-it-task-lists';

export const render = (rawMarkdown: string) => {
	const mdIt = new MarkdownIt({
		html: true,
		breaks: true
	});

	const defaultRender =
		mdIt.renderer.rules.link_open ||
		((tokens, idx, options, _env, self) => self.renderToken(tokens, idx, options));

	mdIt.renderer.rules.link_open = (tokens, idx, options, env, self) => {
		tokens[idx].attrPush(['target', '_blank']);
		return defaultRender(tokens, idx, options, env, self);
	};

	mdIt.use(texmath, { output: 'mathml', blockClass: 'katex-block' });
	mdIt.use(hljs, {
		inline: true,
		auto: false
	});
	mdIt.use(footnote);
	mdIt.use(abbr);
	mdIt.use(tasks);

	const html = mdIt.render(rawMarkdown);

    return html;
};
