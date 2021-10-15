const checkpayload = (req, res, next) => {
    try {
        res.status(401)
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