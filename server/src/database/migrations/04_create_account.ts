import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('accounts', table => {
        table.increments('id').primary();
        table.string('username').notNullable;
        table.string('email').notNullable;
        table.string('password').notNullable;
        table.string('avatar').notNullable;
        table.string('whatsapp').notNullable;
        table.string('bio').notNullable;
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('accounts');
}