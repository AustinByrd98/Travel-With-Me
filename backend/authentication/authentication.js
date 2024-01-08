//Authenticated function
const isAuthenticated = (req, res, next) => {
    if(req.session.currentUser) {
        return next();
    } else {
        res.status(400).json({message: "Unauthorized: No user logged in"});
    }
}

module.exports = isAuthenticated;