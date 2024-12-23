import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { exec } from 'child_process';

export default defineConfig({
	plugins: [sveltekit(), {
		// For development only
		name: 'execute-node-command',
		handleHotUpdate({ file }) {
			if (file.endsWith('.md')) {
				exec('node book.js', (error, stdout, stderr) => {
					if (error) {
						console.error(`Error execute command: ${error}`);
						return;
					}
					if (stderr) {
						console.error(`Command errors: ${stdout}`);
					}
				})
			}
		}
	}],
});
