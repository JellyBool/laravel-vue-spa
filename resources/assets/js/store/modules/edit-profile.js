
export default {
    actions: {
        updateProfileRequest({dispatch}, formData) {
            return axios.post('/api/user/profile/update', formData).then(response => {
                dispatch('showNotification',{level:'success',msg:'资料更新成功'})
            }).catch(errors => {
                dispatch('showNotification',{level:'error',msg:'资料更新失败'})
            })
        },
    }
}