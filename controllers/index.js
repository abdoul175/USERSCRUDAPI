const mysql = require('mysql');

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'users'
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

    

    exports.getAllUsers = getAllUsers;
    exports.addNewUser = addNewUser;
} catch (error) {
    console.error(error);
}