
export default {
    actions: {
        updateProfileRequest({dispatch}, formData) {
            return axios.post('/api/user/profile/update', formData).then(response => {
                //
            }).catch(errors => {
                //
            })
        },
    }
}