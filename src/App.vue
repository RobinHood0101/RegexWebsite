<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import { useI18n } from 'vue-i18n'

    const { t, locale } = useI18n();
    function changeLanguage(event) {
        locale.value = event.target.value;
        console.log("Language changed to: " + event.target.value);
    }
</script>

<template>
    <header>
        <img alt="regex logo" class="logo" src="@/assets/regex.png" width="125" height="125" />

        <div class="wrapper">
            <nav>
                <RouterLink to="/" class="routerlink">{{ t('home') }}</RouterLink>
                <RouterLink to="/rules" class="routerlink">{{ t('rules') }}</RouterLink>
                <RouterLink to="/cheat-sheets" class="routerlink">{{ t('cheatSheets') }}</RouterLink>
                <RouterLink to="/editor" class="routerlink">{{ t('editor') }}</RouterLink>
            </nav>
        </div>
        <h1>Regex Website</h1>
    </header>

    <div class="language">
        <label for="langSelect">{{ t('language') }} </label>
        <select id="langSelect" @change="changeLanguage">
            <option value="de">Deutsch</option>
            <option value="en" selected>English</option>
        </select>
    </div>


    <RouterView />

    <footer>
        Regex Website
        <p>Credits:</p>
        <ul>
            <li><a href="https://digitalfortress.tech/tips/top-15-commonly-used-regex/" target="_blank">digitalfortress.tech</a></li>
            <li><a href="https://stackoverflow.com/questions/1449817/what-are-some-of-the-most-useful-regular-expressions-for-programmers" target="_blank">Stackoverflow</a></li>
            <li><a href="https://dev.to/colom/top-10-most-used-regex-patterns-2pd0" target="_blank">dev.to</a></li>
            <li><a href="https://scriptular.com/" target="_blank">scriptular.com</a></li>
        </ul>
    </footer>
</template>

<style scoped>
header {
    background-color: #95C623;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.routerlink {
    margin: 10px;
    text-decoration: none;
    font-size: 1.5em;
}
.routerlink:hover {
    text-decoration: underline;
}
.language {
    margin-top: 10px;
}
footer {
    background-color: #0E4749;
    padding: 20px;
    color: white;
}
footer p , footer ul li a {
    color: white;
}

</style>
