const checkpayload = (req, res, next) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            next({ message: `username and password required` })
        }
        next()
    } catch (error) {
        next(error);
    }
}

const checkUsernameIsUnique = (req, res, next) => {
    try {
        res.status(401)
        next()
    } catch (error) {
        next(error);
    }
}

module.exports = {
    checkpayload,
    checkUsernameIsUnique,
}