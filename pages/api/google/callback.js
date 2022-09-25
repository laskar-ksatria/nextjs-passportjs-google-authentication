import passport from "passport";
import "../../../lib/passport-google.js";
import { setCookie } from "cookies-next";

export default async function handler(req, res, next) {
  passport.authenticate("google", (err, user) => {
    if (err || !user) {
      return res.redirect("http://localhost:3000/500");
    }
    // set cookie and send redirect
    let { token } = user;
    setCookie("google-token", token, { maxAge: 60 * 6 * 24 });
    res.redirect("http://localhost:3000/");
  })(req, res, next);
}
