<template>
    <div>
        <div class="panel panel-default">
            <ul class="list-group">
                <li class="list-group-item">
                    用户名
                    <br>
                    <h4>{{ user.name }}</h4>
                </li>
                <li class="list-group-item">
                    邮箱
                    <br>
                    <h4>{{ user.email }}</h4>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name:'top-menu',
        created() {
            this.$store.dispatch('setAuthUser');
        },
        computed:{
            ...mapState({
                user: state => state.AuthUser
            })
        },
    }
</script>
