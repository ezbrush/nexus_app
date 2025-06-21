const path = require('path');

module.exports = {
    development: {
        dialect: 'sqlite',
        storage: path.resolve(__dirname, '../../db/database.sqlite'),
    },
};