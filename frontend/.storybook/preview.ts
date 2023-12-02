import { setup } from '@storybook/vue3';
import type { App } from 'vue';

import vuetify from '../src/shared/infrastructure/plugins/vuetify.ts';

setup((app: App) => {
    app.use(vuetify);
});

// you can define global your Vuetify decorators
// export const decorators = [withVuetifyTheme]

/*
import type { Preview } from '@storybook/vue3';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
};

export default preview;
*/
