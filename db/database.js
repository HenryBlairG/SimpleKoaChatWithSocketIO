const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_SCHEMA || 'postgres',
                                process.env.DB_USER || 'postgres',
                                process.env.DB_PASSWORD || 'password',
                                {
                                    host: process.env.DB_HOST || 'localhost',
                                    port: process.env.DB_PORT || 5432,
                                    dialect: 'postgres',
                                    dialectOptions: {
                                        ssl: process.env.DB_SSL == "true"
                                    }
                                });


const Message = sequelize.define('Message', {
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    msgContent: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    roomName: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    userName: {
        type: Sequelize.STRING(50),
        allowNull: false,
    }
});

module.exports = {
    sequelize: sequelize,
    fn: Sequelize.fn,
    Message: Message
};