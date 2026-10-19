// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNext from 'starlight-theme-next';
import starlightPageActions from 'starlight-page-actions'


import svelte from '@astrojs/svelte';


// https://astro.build/config
export default defineConfig({
    site: 'https://clear-2fa-authenticator.flashsoft.eu',
    integrations: [starlight({
        title: 'Clear 2FA Authenticator',
        logo: {
        src: './src/assets/head-icon.svg',
        },
        editLink: {
        baseUrl: 'https://github.com/andrei0x309/docs-clear-2fa-authenticator/edit/main/docs/',
       },
        plugins: [starlightThemeNext(), starlightPageActions({
            share: true
        })],
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/andrei0x309/clear-2fa-authenticator' }],
        sidebar: [
            {
                label: 'Getting Started',
                items: [{ autogenerate: { directory: 'docs' } }]
            },
            {
                label: 'Support',
                items: [
                    { label: 'Changelog', slug: 'changelog' },
                ],
            },
        ],
		}), svelte()],
});