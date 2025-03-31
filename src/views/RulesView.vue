<script>
    export default {
        data() {
            return {
                rules: [
                    { title: "test", description: "123", example: "sadfsdaf" },
                    { title: "test123", description: "dfs123", example: "sasadfsdfdfsdaf" },
                    { title: "46456test", description: "123324", example: "sadfsdafsdfsd" },
                ]
            }
        }
    }
</script>

<template>
    <main>
        <template v-for="rule in rules">
            <h2>{{ rule.title }}</h2>
            <p>{{ rule.description }}</p>
            <p>{{ rule.example }}</p>
        </template>
    </main>
</template>
