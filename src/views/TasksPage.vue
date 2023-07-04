<template>
    <div class="page">
        <navigation-panel
            :navItems="[
                {id: 1, name: 'Проекты'},
                {id: 2, name: 'Задачи'},
                {id: 3, name: 'Пользователи'}
            ]"
            :activeItem="'Задачи'"
            @select-item="selectItem"
        />
        <div class="content-container">
            <absense-of-items 
                v-if="tasks.length == 0"
                :text="'Не создана ни одна задача'"
            />
            <task-item
                v-else
                v-for="(item, index) in tasks"
                v-bind:task="item"
                v-bind:key="index"
            ></task-item>
        </div>
    </div>
</template>

<script>
import NavigationPanel from '@/components/Navigation/NavigationPanel.vue'
import TaskItem from '@/components/TaskItem/TaskItem.vue'
import AbsenseOfItems from '@/components/AbsenseOfItems/AbsenseOfItems.vue'
export default {
    name: 'tasks-page',
    props: {
        tasks: {
            type: Array,
            default: () => []
        }
    },
    components: {
        NavigationPanel,
        TaskItem,
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