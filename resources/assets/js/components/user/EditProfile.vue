<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-body">
                <edit-profile-form></edit-profile-form>
            </div>
        </div>
    </div>
</template>

<script>
    import EditProfileForm from './EditProfileForm.vue'

    export default {
        name: 'edit-profile',
        components: {
            EditProfileForm
        }
    }
</script>