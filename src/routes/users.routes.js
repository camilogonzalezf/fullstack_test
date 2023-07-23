const { Router } = require('express')
const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require('../controllers/users.controllers')

const pool = require('../db');


const router = Router();

// Consulta listado
router.get('/user', getAllUsers)

// 10 es in id
router.get('/user/:id', getUser)

// Crea un usuario nuevo
router.post('/user', createUser)

// BOrrar usuarios
router.delete('/user/:id', deleteUser)

// Actualiza usuarios
router.put('/user/:id', updateUser)

module.exports = router