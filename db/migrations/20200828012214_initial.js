const Knex = require("knex");

//! ─── MY IMPORTS ─────────────────────────────────────────────────────────────────
const tableNames = require("./../../constants/tableNames");

/**
 * @param {Knex} knex
 */

const addDefaultColumns = (table) => {
  table.timestamps(false, true)
  table.dateTime('deleted_at');
};

exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.users, (table) => {
    table.increments().notNullable();
    table.string("email", 254).notNullable().unique();
    table.string("name").notNullable();
    table.string("password", 127).notNullable();
    table.dateTime("last_login");
    addDefaultColumns(table)
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(tableNames.users);
};
