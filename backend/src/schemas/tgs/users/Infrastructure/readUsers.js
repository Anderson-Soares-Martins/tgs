const readUsers = (ctx, params) => {
    const sql = (
        ctx.db.knex('users as u')
            .select(
                'u.id as _id',
                'u.name as _name',
                'u.email as _email,',
                'u.picture as _picture',
                'u.username as _username',
                'u.deleted_at as _isDeleted'
            )
    )
    return (
        ctx.db.knexnest(sql)
            .then(result => result)
            .catch(error => {
                const errorObj = {
                    msg: error.message,
                    hint: error.hint
                }
                ctx.core.erroHandling('readUser: There was an error in the database', 'database_error', errorObj)
            })
    )
}

export default readUsers