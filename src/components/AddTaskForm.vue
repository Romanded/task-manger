<template>
    <form class="add_form">
        <input class="text" type="text" placeholder="ваше задание" v-model="title">
        <input class="date" type="date" v-model="date">
        <div>
            <button class="btn" type="button" @click="addTask">Добавить</button>
        </div>
    </form>
</template>

<script>
export default {
    data: () => ({

        title: '',
        date: '',
    }),
    props: {
        tasks: {
            type: Array,
            required: true,
        },
    },
    methods: {
        addTask() {
            let task = {
                id: this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1,
                title: this.title,
                date: this.date,
                edit: false
            }
            this.$emit( 'addTask', task)
        },
    },
}
</script>

<style>
    .add_form {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        width: 400px;
        height: 245px;
        margin: 20px 10px 50px auto;
        padding-left: 35px;

        background: #FFFFFF;
        box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
    }

    input {
        outline: none;
        border: none;
        border-bottom: 1px solid #464646;
        margin-bottom: 30px;
    }

    .text {
        width: 75%;
    }

    .btn {
        border: none;
        background: #62dc00;
    }
</style>
