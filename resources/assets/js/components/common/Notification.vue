<template>
    <div class="container">
        <div class="notification">
            <transition name="fade" mode="in-out">
                <div class="alert" :class="notificationLevel"
                     v-if="msg"
                     @click="hideNotification()">
                    <button type="button"
                            class="close"
                            data-dismiss="alert"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {{ msg }}
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    export default {
        name: 'notification',
        computed: {
            ...mapState({
                level: state => state.Notification.level,
                msg: state => state.Notification.msg
            }),
            notificationLevel() {
                return 'alert-' + this.level;
            }
        },
        methods: {
            ...mapActions([
                'hideNotification'
            ])
        }
    }
</script>