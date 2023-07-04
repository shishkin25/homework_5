<template>
  <div id="app">
    
    <!-- Демонстрация динамического переключения компонентов -->
    <template v-if="selectedNavItem == PageNames.PROJECTS">
      <component 
        :is="PageComponentsNames.PROJECTS"
        :projects="projects"
        @select-item="selectPageComponent"
      ></component>
    </template>

    <template v-else-if="selectedNavItem == PageNames.TASKS">
      <component 
        :is="PageComponentsNames.TASKS"
        :tasks="tasks"
        @select-item="selectPageComponent"
      ></component>
    </template>

    <template v-else>
      <component 
        :is="PageComponentsNames.USERS"
        @select-item="selectPageComponent"
      ></component>
    </template>


  <!-- Демонстрация первой части задания (UI-компоненты). Теперь они размещены в папке UI, а также зарегистрированы глобально в main.js. -->
  <!-- <div style="width: 400px; margin: 0 auto; padding: 30px">
    <base-button
      buttonName='Нажми'
    />
    <br>
    <dropdown-button
      svgName='dots'
      buttonStyle='secondary'
      :items="arrayOfItems"
    />
    <br><br>
    <dropdown-button
      svgName='arrow-down'
      buttonName='Button'
      :items="arrayOfItems"
    />
    <br><br>
    <status-item
      statusName='Удалена'
    />
    <br><br>
    <base-input
      placeholder='Какой-то текст'
      svgName='eye-close'
      value='Значение'
    >
    </base-input>
    <br><br>
    <my-select
      :items="arrayOfItems"
      :valueFromProps="'text3'"
    />
  </div> -->


  <!-- Демонстрация страницы "Создание задачи" -->
  <!-- <creating-task-page/> -->

  </div>
</template>

<script>
import { PageComponentsNames, PageNames } from '@/js/constants.js';

import ProjectsPage from '@/views/ProjectsPage.vue'
import TasksPage from '@/views/TasksPage.vue'
import ProfilesPage from '@/views/UserProfilePage.vue'

import CreatingTaskPage from '@/views/CreatingTaskPage.vue'
export default {
  name: 'App',
  components: {
    ProjectsPage,
    TasksPage,
    ProfilesPage,

    CreatingTaskPage
  },
  data() {
    return {
      PageComponentsNames,
      PageNames,
      arrayOfItems: [
        {id: 1, text: 'text1'},
        {id: 2, text: 'text2'},
        {id: 3, text: 'text3'}
      ],
      tasks: [
        {
            name: 'Название-задачи-1',
            code: '#1',
            createdBy: 'Иванов И.И. создал 1 час назад', 
            changedBy: 'Баранов В.В. изменил 1 минуту назад'
        }, 
        {
            name: 'Название-задачи-2',
            code: '#2',
            createdBy: 'Иванов И.И. создал 1 час назад', 
            changedBy: 'Баранов В.В. изменил 1 минуту назад'
        },
        {
            name: 'Название-задачи-3',
            code: '#3',
            createdBy: 'Иванов И.И. создал 1 час назад', 
            changedBy: 'Баранов В.В. изменил 1 минуту назад'
        }, 
        {
            name: 'Название-задачи-4',
            code: '#4',
            createdBy: 'Иванов И.И. создал 1 час назад', 
            changedBy: 'Баранов В.В. изменил 1 минуту назад'
        }, 
        {
            name: 'Название-задачи-5',
            code: '#5',
            createdBy: 'Иванов И.И. создал 1 час назад', 
            changedBy: 'Баранов В.В. изменил 1 минуту назад'
        }
      ],

      projects: [
        {
            name: 'Название-проекта-1',
            code: '#1',
            createdBy: 'Иванов И.И. создал 1 час назад', 
            changedBy: 'Баранов В.В. изменил 1 минуту назад'
        }, 
        {
            name: 'Название-проекта-2',
            code: '#2',
            createdBy: 'Иванов И.И. создал 1 час назад', 
            changedBy: 'Баранов В.В. изменил 1 минуту назад'
        },
        {
            name: 'Название-проекта-3',
            code: '#3',
            createdBy: 'Иванов И.И. создал 1 час назад', 
            changedBy: 'Баранов В.В. изменил 1 минуту назад'
        }, 
        {
            name: 'Название-проекта-4',
            code: '#4',
            createdBy: 'Иванов И.И. создал 1 час назад', 
            changedBy: 'Баранов В.В. изменил 1 минуту назад'
        }, 
        {
            name: 'Название-проекта-5',
            code: '#5',
            createdBy: 'Иванов И.И. создал 1 час назад', 
            changedBy: 'Баранов В.В. изменил 1 минуту назад'
        }
      ], 
      selectedNavItem: 'Проекты',
    }
  },
  methods: {
    selectPageComponent($event) {
      this.selectedNavItem = $event;
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/style.scss';
</style>
