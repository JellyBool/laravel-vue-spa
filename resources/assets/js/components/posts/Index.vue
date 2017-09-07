<template>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">文章首页列表</div>
                    <div class="panel-body">
                        <div v-for="post in posts" :key="post.id" class="bs-callout bs-callout-danger">
                            <h4><router-link :to="{ name: 'posts', params: { id: post.id }}">{{ post.title }}</router-link></h4>
                            <p>{{ post.body }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        mounted() {
            axios.get('/api/posts').then(response => {
                this.posts = response.data.data
            })
        },
        data() {
            return {
                posts : []
            }
        }
    }
</script>
