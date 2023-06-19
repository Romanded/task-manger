<template>
    <ul class="list">
        <OneTask
            @removeTask="removeTask"
            :tasks="tasks"
            v-for="task in tasks"
            :key ="task.id"
            :task="task"
        />
    </ul>
</template>

<script>
import OneTask from "@/components/OneTask.vue";

export default {
    components: {OneTask},
    props: {
        tasks: {
            type: Array,
            required: true
        }
    },
    methods: {
        removeTask(task) {
            this.$emit('removeTask', task)
        },
    }
}
</script>

<style>
    .list {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px;
        width: 100vw;

        box-shadow: 0 -1px 10px 0 rgba(0, 0, 0, 0.25);
        border-radius: 50px 50px 0 0;
    }
</style>