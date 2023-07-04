<template>
    <header class="menu">
        <div class="menu__content">
            <nav class="menu__nav">
                <ul class="menu__nav-list">
                    <li class="menu__nav-item btn"
                        v-for="item in navItems"
                        :key="item.id"
                        :class="{'menu__nav-item_active': item.name == activeItem}"
                        @click="selectItem(item.name)"
                    >
                        <a href="#">{{item.name}}</a>
                    </li>
                </ul>
            </nav>
            <div class="menu__user-btn">
                <div class="avatar">
                    <img :src="AvatarImg" alt="avatar">
                </div>
                <div class="menu__user-arrow">
                    <svg-icon
                        :svgName="'arrow-down'"
                    />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import AvatarImg from '@/assets/images/avatar.png'


export default {
    props: {
        navItems: {
            type: Array,
            default: () => []
        }, 
        activeItem: {
            type: String, 
            validator(value) {
                return ['Проекты', 'Задачи', 'Пользователи'].includes(value);
            }
        }
    },
    data () {
        return {
            AvatarImg, 
            selectedNavItem: null,
        }
    },
    methods: {
        selectItem(name) {
            this.selectedNavItem = name;
            this.$emit('select-item', this.selectedNavItem);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/components/Navigation/index.scss';
</style>
