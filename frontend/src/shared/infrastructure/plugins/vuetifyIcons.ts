import { h } from 'vue';

// Is possible import icon.svg or icon.vue items, Ex: import example from '@/shared/assets/icons/svg/example.icon.vue';
import input from '@/assets/icons/input.svg';
import inputChecked from '@/assets/icons/inputChecked.svg';

const icons = {
    input,
    inputChecked
};

const custom = {
    component: (props) => h(icons[props.icon], { class: 'blog-icon' })
};

export default {
    defaultSet: 'custom',
    aliases: icons,
    sets: {
        custom
    }
};
