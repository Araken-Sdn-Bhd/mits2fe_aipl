<template>
        <div class="bg-login login-bg">
            <div class="login-screen">
                <img src="~/assets/images/mentari.png">
                <router-link to="/staff-login">Staff Login</router-link>
                <router-link to="/employer-login">Employer Login</router-link>
                <router-link to="/modules/faq/faq-list" target="_blank">Frequently Asked Questions</router-link>
            </div>
        </div>
</template>
<script>
export default {
    name: "login-home",
};
</script>
