<template>
    <div class="page">
        <navigation-panel
            :navItems="[
                {id: 1, name: 'Проекты'},
                {id: 2, name: 'Задачи'},
                {id: 3, name: 'Пользователи'}
            ]"
            :activeItem="'Проекты'"
            @select-item="selectItem"
        />
        <div class="content-container">
            <absense-of-items 
                v-if="projects.length == 0"
                :text="'Не создан ни одна проект'"
            />
            <project-item
                v-else
                v-for="(item, index) in projects"
                v-bind:project="item"
                v-bind:key="index"
            ></project-item>
        </div>
    </div>
    
</template>

<script>
import NavigationPanel from '@/components/Navigation/NavigationPanel.vue'
import ProjectItem from '@/components/ProjectItem/ProjectItem.vue'
import AbsenseOfItems from '@/components/AbsenseOfItems/AbsenseOfItems.vue'

export default {
    name: 'projects-page',
    props: {
        projects: {
            type: Array,
            default: () => []
        }
    },
    components: {
        NavigationPanel,
        ProjectItem,
        AbsenseOfItems
    },
    data() {
        return {
            selectedNavItem: null
        }
    },
    methods: {
        selectItem($event) {
            this.selectedNavItem = $event;
            this.$emit('select-item', this.selectedNavItem);
        }
    }
}
</script>

<style lang="scss">
@import '@/scss/blocks/page.scss';
</style>