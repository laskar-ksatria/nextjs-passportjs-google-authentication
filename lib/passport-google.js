import passport from "passport";
import GoogleStrategy from "passport-google-oauth";

//Middleware
passport.use(
  "google",
  new GoogleStrategy.OAuth2Strategy(
    {
      clientID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
      callbackURL: "http://localhost:3000/api/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        done(null, { token: accessToken, profile });
      } catch (error) {
        done(error, null);
      }
    }
  )
);
