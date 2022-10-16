const { getUserById } = require("../controller/controller.users");

const JwtStrategy = require("passport-jwt").Strategy,
ExtractJwt = require("passport-jwt").ExtractJwt;


module.exports = (passport) => {
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: process.env.SECRET,
    };
    passport.use(
        new JwtStrategy(opts, async (decoded, done) => {
            try {
                const response = await getUserById(decoded.id)
                if (!response) return done(null, false)
                console.log("jwt", decoded)
                return done(null, decoded)
            } catch (error) {
                done(error)
            }
        })
    )
}