<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="list-group">
                    <router-link :to="{name: 'profile'}" class="list-group-item" activeClass="active" exact>个人资料</router-link>
                    <router-link :to="{name: 'profile.editProfile'}" class="list-group-item" activeClass="active" exact>修改资料</router-link>
                    <router-link :to="{name: 'profile.editPassword'}" class="list-group-item" activeClass="active" exact>修改密码</router-link>
                </div>
            </div>
            <div class="col-md-9">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'profile-wrapper'
    }
</script>