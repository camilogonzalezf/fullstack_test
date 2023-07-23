
const pool = require('../db')

const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await pool.query('SELECT * FROM usergit')
        res.json(allUsers.rows)
    } catch (error) {
        next(error)
    }

}

const getUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await pool.query('SELECT * FROM usergit  WHERE id = $1', [id])

        if (result.rows.length)
            res.json(result.rows)
        else
            return res.status(404).json({
                message: "User not found"
            })
    } catch (error) {
        next(error)
    }
}

const createUser = async (req, res, next) => {
    try {
        const { login, userid, followers } = req.body
        const result = await pool.query(
            'INSERT INTO usergit (login , userid, followers) VALUES ($1, $2, $3) RETURNING *',
            [login, userid, followers])
        res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await pool.query('DELETE FROM usergit  WHERE id = $1', [id])

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "User not found"
            })
        return res.sendStatus(204);
    } catch (error) {
        next(error)
    }
}

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const { login, userid, followers } = req.body
        const result = await pool.query('UPDATE usergit SET login = $1, userid =$2, followers =$3 WHERE id = $4 RETURNING *',
            [login, userid, followers, id]
        )
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "User not found"
            })
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser
}