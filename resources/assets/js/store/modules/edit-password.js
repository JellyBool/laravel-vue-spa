
export default {
    actions: {
        updatePasswordRequest({dispatch}, formData) {
            return axios.post('/api/user/password/update', formData).then(response => {
                //
            }).catch(errors => {
                //
            })
        },
    }
}