<template>
  <div class="task-form">
    <div class="task-form__title">Создание задачи</div>
    <form id="task-form" action="" class="task-form__form">
        <div class="task-form__stripe-wrapper">
            <div class="task-form__name-wrapper">
                <div class="task-form__name">Название</div>
                <svg-icon class="task-form__svg"
                    svgName="star"
                    :svgSize="{width: 8, height: 19}"
                />
            </div>
            <base-input 
                class="task-form__input" 
                :placeholder="'Введите текст...'"
                v-model="task.name"
                @input-change="saveTaskName"
            />
        </div>
        <div class="task-form__stripe-wrapper">
            <div class="task-form__name-wrapper">
                <div class="task-form__name">Описание</div>
                
            </div>
            <base-textarea
                :placeholder="'Введите текст...'"
                v-model="task.description"
                @textarea-change="saveTaskDescription"
            />
        </div>
        <div class="task-form__stripe-wrapper">
            <div class="task-form__name-wrapper">
                <div class="task-form__name">Проект</div>
                <svg-icon class="task-form__svg"
                    svgName="star"
                    :svgSize="{width: 8, height: 19}"
                />
            </div>
            <my-select
                :items="[{id: 1, text: 'Иванов И.И.'}, {id: 2, text: 'Петров П.П.'}]"
                :placeholder="'Не выбран'"
                @select-change="saveTaskOwner"
            />
        </div>
        <div class="task-form__stripe-wrapper">
            <div class="task-form__name-wrapper">
                <div class="task-form__name">Исполнитель</div>
            </div>
            <my-select
                :items="[{id: 1, text: 'проект-1'}, {id: 2, text: 'проект-2'}]"
                :placeholder="'Не назначен'"
                @select-change="saveTaskProject"
            />
        </div>

    </form>
    <div class="task-form__footer">
        <base-button
            class="task-form__button"
            :buttonName="'Отмена'"
            :buttonStyle="'secondary'"
        />
        <base-button
            class="task-form__button"
            :buttonName="'Создать задачу'"
            @click="showTaskInConsole"
        />
    </div>

  </div>
</template>

<script>
export default {
    data() {
        return {
            task: {
                name: '',
                description: '',
                project: '',
                owner: ''
            }
        }
    },
    methods: {
        showTaskInConsole() {
            console.log(this.task);
        },
        saveTaskName($event) {
            this.task.name = $event;
        },
        saveTaskDescription($event) {
            this.task.description = $event;
        }, 
        saveTaskOwner($event) {
            this.task.owner = $event;
        },
        saveTaskProject($event) {
            this.task.project = $event;
        }
    }
}
</script>

<style lang="scss">
@import '@/components/TaskForm/index.scss';
</style>