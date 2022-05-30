import msg from './msgController.js'

import conexion from '../database/conexion.js'

export const login = (req, res) => {
    try {
        const { user, pass } = req.body
        if (!user || !pass) {
            return res.json({
                msg: !user && !pass
                    ? 'El usuario y la contraseña son requeridos'
                    : !user
                        ? 'Usuario requerido'
                        : 'Contraseña requerida'
            })
        }

        conexion.query("SELECT * FROM users WHERE email = ?", [user], (err, result) => {
            console.log(err ? `Error login ${err}` : `SELECT * FROM users WHERE email = ${user}. Results: ${result.length}`);
            res.json(err
                ? { err: 'Ocurrió un error' }
                : result.length == 0
                    ? { msg: 'Usuario no existe' }
                    : result[0].pass == pass
                        ? { user: result[0] }
                        : { msg: 'Contraseña Incorrecta' })
        })
    } catch (err) {
        console.log(`Ocurrió un error en el login ${err}`)
    }
}