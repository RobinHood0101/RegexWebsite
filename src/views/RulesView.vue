<script>
    import { RouterLink, RouterView } from 'vue-router'
    import { useI18n } from 'vue-i18n'
    
    export default {
        data() {
            return {
                rules_en: [
                    { 
                        title: "1: Whole Numbers", 
                        description: "Only select whole numbers like 10", 
                        expression: "/^\\d+$/", 
                        example: "(45 45.5 +99 -100 0) only select 45 and 0" 
                    },
                    { 
                        title: "2: Alphanumeric without spaces", 
                        description: "Only select alphanumerics", 
                        expression: "/^[a-zA-Z0-9]*$/", 
                        example: "( hello whathow are you? hi5 8ask) only select hello, what, hi5 and 8ask"
                    },
                    { 
                        title: "3: Positive Integers", 
                        description: "Only select positive integers", 
                        expression: "^\\d+$", 
                        example: "(-1, 3, -6, 7) only select 3 and 7" 
                    },
                    { 
                        title: "4: Year 1900-2099", 
                        description: "Check if the year is between 1900 and 2099", 
                        expression: "^(19|20)\\d{2}$", 
                        example: "(2025, 3000, 1901, 1950) only select 2025, 1901 and 1950" 
                    },
                    { 
                        title: "5: IP v4", 
                        description: "Check if the string is a valid IPv4 address", 
                        expression: "^(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])$", 
                        example: "(192.168.1.1) would be true" 
                    },
                    { 
                        title: "6: Username", 
                        description: "Checks if the string is a username", 
                        expression: "^[\\w\\d_.]{4,}$", 
                        example: "(bob213, bob$, !bob, bob_bob) only select bob213 and bob_bob " 
                    },
                    { 
                        title: "7: Password", 
                        description: "Checks if password has at least 6 symbols", 
                        expression: "^.{6,}$", 
                        example: "(bob123, secret1, bob, pw12) only select bob123 and secret1" 
                    },
                    { 
                        title: "8: E-Mail", 
                        description: "Search for E-Mail", 
                        expression: "^[_]*([a-z0-9]+(\\.|_*)?)+@([a-z][a-z0-9-]+(\\.|-*\\.))+[a-z]{2,6}$", 
                        example: "(bob@gmail.com, sdfas.ch, a@b.c) only select bob@gmail.com" 
                    },
                    { 
                        title: "9: URL Validation", 
                        description: "Regex pattern that matches a valid URL starting with http or https.", 
                        expression: "^(https?:\\/\\/)?([a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5})(:[0-9]{1,5})?(\\/.*)?$", 
                        example: "https://google.com would be valid" 
                    },
                    { 
                        title: "10: Password Strength Validation", 
                        description: "Regex pattern matching a strength rules of the password.", 
                        expression: "/^(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/", 
                        example: "passWord123 would be valid" 
                    },
                ],
                rules_de: [
                    { 
                        title: "1: Ganze Zahlen", 
                        description: "Wähle nur ganze Zahlen wie 10 aus", 
                        expression: "/^\\d+$/", 
                        example: "(45 45.5 +99 -100 0) nur 45 und 0 auswählen" 
                    },
                    { 
                        title: "2: Alphanumerisch ohne Leerzeichen", 
                        description: "Wähle nur alphanumerische Zeichen aus", 
                        expression: "/^[a-zA-Z0-9]*$/", 
                        example: "( hallo wiegehts bist du? hi5 8ask) nur hallo, wiegehts, hi5 und 8ask auswählen"
                    },
                    { 
                        title: "3: Positive Ganzzahlen", 
                        description: "Wähle nur positive Ganzzahlen aus", 
                        expression: "^\\d+$", 
                        example: "(-1, 3, -6, 7) nur 3 und 7 auswählen" 
                    },
                    { 
                        title: "4: Jahr 1900-2099", 
                        description: "Überprüfe, ob das Jahr zwischen 1900 und 2099 liegt", 
                        expression: "^(19|20)\\d{2}$", 
                        example: "(2025, 3000, 1901, 1950) nur 2025, 1901 und 1950 auswählen" 
                    },
                    { 
                        title: "5: IP v4", 
                        description: "Überprüfe, ob der String eine gültige IPv4-Adresse ist", 
                        expression: "^(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])$", 
                        example: "(192.168.1.1) wäre gültig" 
                    },
                    { 
                        title: "6: Benutzername", 
                        description: "Überprüft, ob der String ein Benutzername ist", 
                        expression: "^[\\w\\d_.]{4,}$", 
                        example: "(bob213, bob$, !bob, bob_bob) nur bob213 und bob_bob auswählen" 
                    },
                    { 
                        title: "7: Passwort", 
                        description: "Überprüft, ob das Passwort mindestens 6 Zeichen hat", 
                        expression: "^.{6,}$", 
                        example: "(bob123, secret1, bob, pw12) nur bob123 und secret1 auswählen" 
                    },
                    { 
                        title: "8: E-Mail", 
                        description: "Suche nach E-Mail", 
                        expression: "^[_]*([a-z0-9]+(\\.|_*)?)+@([a-z][a-z0-9-]+(\\.|-*\\.))+[a-z]{2,6}$", 
                        example: "(bob@gmail.com, sdfas.ch, a@b.c) nur bob@gmail.com auswählen" 
                    },
                    { 
                        title: "9: URL-Validierung", 
                        description: "Regex-Muster, das eine gültige URL erkennt, die mit http oder https beginnt.", 
                        expression: "^(https?:\\/\\/)?([a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5})(:[0-9]{1,5})?(\\/.*)?$", 
                        example: "https://google.com wäre gültig" 
                    },
                    { 
                        title: "10: Passwortstärke-Validierung", 
                        description: "Regex-Muster, das die Regeln zur Passwortstärke überprüft.", 
                        expression: "/^(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/", 
                        example: "passWord123 wäre gültig" 
                    },
                ],
            }
        },
        computed: {
            currentLanguage() {
                return this.$i18n.locale; 
            },
            rules() {
                return this.currentLanguage === 'en' ? this.rules_en : this.rules_de;
            }
        }
    }
</script>

<template>
    <main>
        <div class="rule" v-for="(rule, index) in rules" :key="index">
            <h2>{{ rule.title }}</h2>
            <p>{{ rule.description }}</p>
            <pre><code>{{ rule.expression }}</code></pre>
            <p>{{ rule.example }}</p>
        </div>
    </main>
</template>


<style scoped>
    .rule {
        margin-bottom: 60px;
    }
</style>