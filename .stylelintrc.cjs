/** @type {import("stylelint").Config} */

const config = {
    extends: [
        "stylelint-config-recommended",
        "stylelint-config-prettier", // must be the last extension
    ],
};

module.exports = config;
