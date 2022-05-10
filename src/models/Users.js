import Sequelize from 'sequelize';
import { connection } from '../database/connection.js';

export const user = connection.define('users',{
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	nome: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,		
	},
	celular: {
		type: Sequelize.STRING,
		allowNull: false,		
	},
	descricao: {
		type: Sequelize.STRING,
		allowNull: true,		
	},
	conhecimento: {
		type: Sequelize.INTEGER,
		allowNull: true,		
	},
	nascimento: {
		type: Sequelize.STRING,
		allowNull: true,		
	},
},{
	freezeTableName: true,
	createdAt: false,
	updateAt: false,
	timestamps: false,
});

const initTable = async () => {
    await user.sync();
}

initTable();