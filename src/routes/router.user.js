const passport = require("passport");
const { upload } = require("../../utils/multer");
const {
  getCharacters,
  newRegisterCharacter,
  updateCharacter,
  getCharacter,
  deteleCharacter,
} = require("../services/service.characters");
const { registerNewGender } = require("../services/service.gender");
const { getAllUsers, role, register } = require("../services/services.users");
require("../auth/auth.middleware")(passport);

const router = require("express").Router();

router.route("/users").get( passport.authenticate("jwt", {session: false}),getAllUsers).post(register);

router
  .route("/role")
  .post(passport.authenticate("jwt", { session: false }), role);

router.route("/genders")
  .post(passport.authenticate("jwt",  {session: false}), upload.single('image'), registerNewGender)


router
  .route("/characters")
  .get(passport.authenticate("jwt", { session: false }), getCharacters)
  .post(passport.authenticate("jwt", { session: false }), upload.single('image') , newRegisterCharacter);

router
  .route("/characters/:id")
  .patch(passport.authenticate("jwt", { session: false }), updateCharacter)
  .get(passport.authenticate("jwt", { session: false }), getCharacter)
  .delete(passport.authenticate("jwt", { session: false }), deteleCharacter);

exports.router = router;
