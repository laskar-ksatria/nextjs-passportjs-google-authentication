import passport from "passport";
import "../../../lib/passport-google";

export default function handler(req, res, next) {
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })(req, res, next);
}
