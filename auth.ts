import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

/**
 * Light auth. It only protects saved lists and contribution status, so a single
 * credentials account configured through environment variables is enough.
 * Set AUTH_SECRET and NEXTAUTH_SECRET in production, otherwise the fallback
 * secret below is used and sessions are not secure.
 */
const secret =
  process.env.AUTH_SECRET ??
  process.env.NEXTAUTH_SECRET ??
  "bezalel-blueprints-development-fallback-secret";

const demoEmail = process.env.AUTH_DEMO_EMAIL;
const demoPassword = process.env.AUTH_DEMO_PASSWORD;

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret,
  trustHost: true,
  session: { strategy: "jwt" },
  pages: { signIn: "/saved" },
  providers: [
    Credentials({
      name: "Bezalel account",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!demoEmail || !demoPassword) return null;
        const email = typeof credentials?.email === "string" ? credentials.email.trim() : "";
        const password =
          typeof credentials?.password === "string" ? credentials.password : "";
        if (email.toLowerCase() !== demoEmail.toLowerCase()) return null;
        if (password !== demoPassword) return null;
        return { id: "bezalel-member", name: "Maker", email: demoEmail };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?.email) token.email = user.email;
      return token;
    },
    async session({ session, token }) {
      if (token.email && session.user) session.user.email = token.email;
      return session;
    },
  },
});
