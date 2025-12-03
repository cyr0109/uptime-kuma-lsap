exports.up = function (knex) {
    return knex.schema
        .alterTable("monitor", function (table) {
            table.text("rebootScript");
        });
};

exports.down = function (knex) {
    return knex.schema
        .alterTable("monitor", function (table) {
            table.dropColumn("rebootScript");
        });
};
