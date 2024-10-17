// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			 
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'My Docs', slug: 'guides/example' },
					],
				},


                {
					label: 'Git & Github',
					items: [ 
						{ label: 'Introduction', slug: 'guides/git_github_intro' },
						 
					],
				},


                {
					label: 'Python',
					items: [ 
						{ label: 'Introduction', slug: 'guides/python_intro' },
                        { label: 'Roadmap', slug: 'guides/python_roadmap' },
					],
				},

                {
					label: 'SQL',
					items: [
						{ label: 'Introduction', slug: 'guides/sql_intro' },   
                        { label: 'Roadmap', slug: 'guides/sql_roadmap' },
                        { label: 'Motivation', slug: 'guides/sql_motivation' }, 
					],
				},
				 
				{ label: 'reference', 
					autogenerate: { directory: 'reference' }, 
				},
				
			],
		}),
	],
});