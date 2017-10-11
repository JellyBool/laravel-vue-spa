<template>
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" data-toggle="collapse" data-target="#app-navbar-collapse" class="navbar-toggle collapsed"><span class="sr-only">Toggle Navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button>
                <router-link to="/" class="navbar-brand" exact>Vue-SPA</router-link>
            </div>
            <div class="collapse navbar-collapse" id="app-navbar-collapse">
                <ul class="nav navbar-nav"></ul>
                <ul class="nav navbar-nav navbar-right">
                    <router-link to="/login" tag="li">
                        <a>登录</a>
                    </router-link>
                    <router-link to="/register" tag="li">
                        <a>注册</a>
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {

    }
</script>
