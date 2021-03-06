const { onUpdateTrigger } = require('./triggers')

exports.up = (knex) => (
  knex.schema.createTable('users', (table) => {
    table.uuid('id').unique().primary().notNullable()
      .defaultTo(knex.raw('gen_random_uuid()'))

    table.uuid('role_id').notNullable().references('roles.id')
    table.string('name').notNullable()
    table.string('picture')
    table.string('email').unique().notNullable()
    table.string('username').unique().notNullable()
    table.string('password').notNullable()
    table.string('approval_token')

    table.datetime('created_at', { precision: 6 }).notNullable().defaultTo(knex.fn.now(6))
    table.datetime('updated_at', { precision: 6 }).notNullable().defaultTo(knex.fn.now(6))
    table.datetime('deleted_at', { precision: 6 })
    table.uuid('created_by').notNullable()
    table.uuid('updated_by')
    table.uuid('deleted_by')

    table.index(['id'], 'index_user_id')
  }).then(() => knex.raw(onUpdateTrigger('users')))
)
exports.down = (knex) => knex.schema.dropTable('users')