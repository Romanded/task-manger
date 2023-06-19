<template>
    <li class="task">
        {{ task.id }}
        <input v-model="title" type="text" v-if="task.edit" @keyup.enter="changeTitle(task)"/>
        <div v-else @click="switchEdit(task)">
            {{ task.title }}
        </div>
        {{ task.date }}
        <button @click="removeTask(task)">&#215;</button>
    </li>
</template>

<script>

export default {
    data: () => ({
        title: ''
    }),
    props: {
        task: {
            type: Object,
            required: true
        },
        tasks: {
            type: Array,
            required: true
        },
    },
    methods: {
        removeTask(task) {
            this.$emit('removeTask', task)
        },
        switchEdit(task) {
            task.edit = !task.edit
        },
        changeTitle(task) {
            task.title = this.title
            task.edit = false
        }
    }
}
</script>

<style>
    .task {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 85%;
        height: 75px;
        border-radius: 10px;
        margin-bottom: 30px;

        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    }
</style>