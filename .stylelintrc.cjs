/** @type {import("stylelint").Config} */

const config = {
    extends: [
        "stylelint-config-recommended",
        "stylelint-config-clean-order",
        "stylelint-config-prettier", // must be the last extension
    ],
};

module.exports = config;
