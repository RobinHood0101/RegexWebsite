<script setup>
    import { useI18n } from 'vue-i18n'
    const { t, locale } = useI18n();
</script>

<template>
    <main>
        <h2>{{ t('welcome') }}</h2>
        <p>{{ t('siteDescription') }}</p>
    </main>
</template>
