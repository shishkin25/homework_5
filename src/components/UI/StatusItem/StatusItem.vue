<template>
  <div class="status"
    :class="{
        'status_blue': blueColor,
        'status_gray': grayColor,
        'status_orange': orangeColor,
    }"
  >
    {{statusName}}
  </div>
</template>

<script>
export default { 
    name: 'status-item',
    props: {
        statusName: {
            type: String,
            required: true
        }
    },
    computed: {
        blueColor() {
            return this.statusName == 'Завершена' || this.statusName == 'Выполнена' || this.statusName == 'Закрыта' || this.statusName == 'Активен'
        },
        grayColor() {
            return this.statusName == 'Не активен'
        },
        orangeColor() {
            return this.statusName == 'Удалена'
        }
    }

}
</script>

<style lang="scss">
@import '@/components/UI/StatusItem/index.scss';
</style>