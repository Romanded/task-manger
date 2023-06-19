<template>
    <div>
        <AddTaskForm
            :tasks="tasks"
            @addTask="addTask"
        />
        <TasksList
            @removeTask="removeTask"
            :tasks="tasks"
        />
    </div>
</template>

<script>
import TasksList from "@/components/TaskList.vue";
import AddTaskForm from "@/components/AddTaskForm.vue";
export default {
    components: {AddTaskForm, TasksList},
    data: () => ({
        tasks: [],
    }),
    methods: {
        addTask(task) {
            localStorage.tasks = JSON.stringify([...this.tasks, task])
            this.tasks = JSON.parse(localStorage.tasks)
        },
        removeTask(task) {
            const newArr = [...this.tasks]
            newArr.splice(this.tasks.indexOf(task), 1)
            localStorage.tasks = JSON.stringify(newArr)
            this.tasks = JSON.parse(localStorage.tasks)
        },
    },
    mounted() {
        if (localStorage.tasks) {
            this.tasks = JSON.parse(localStorage.tasks)
        }
        console.log(this.tasks)
    }
}

</script>

<style>
</style>