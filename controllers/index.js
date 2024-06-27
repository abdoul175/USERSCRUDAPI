require('dotenv').config();
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: process.env.HOSTNAME || 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

try {
    conn.connect()

    const getAllUsers = (req, res) => {
        conn.query('select * from users', (err, rows) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.status(200).send(rows);
            }
        });
    };

    const addNewUser = (req, res) => {
        const user = req.body;
        conn.query('insert into users set?', user, (err, rows) => {
            if (err) {
                console.log(err);
                res.status(500).json(err.message);
            } else {
                res.status(200).send({
                    message: 'User added successfully',
                });
            }
        });
    };

    const removeUser = (req, res) => {
        const id = req.params.id;
        conn.query('delete from users where id =?', id, (err, rows) => {
            if (err) {
                console.log(err);
                res.status(500).json(err.message);
            } else {
                res.status(200).send({
                    message: 'User deleted successfully',
                });
            }
        });
    };

    const updateUser = (req, res) => {
        const id = req.params.id;
        const user = req.body;
        conn.query('update users set? where id =?', [user, id], (err, rows) => {
            if (err) {
                console.log(err);
                res.status(500).json(err.message);
            } else {
                res.status(200).send({
                    message: 'User updated successfully',
                });
            }
        });
    };

    exports.getAllUsers = getAllUsers;
    exports.addNewUser = addNewUser;
    exports.removeUser = removeUser;
    exports.updateUser = updateUser;

} catch (error) {
    console.error(error);
}