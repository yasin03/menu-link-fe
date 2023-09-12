import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    signOut: "/asdasdas",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(
            "https://menu-project-1c3dcd8eae29.herokuapp.com/login",
            {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" },
            }
          );
          const user = await res.json();

          if (res.ok && user) {
            return {
              id: user.id,
              name: user.name,
              key: user.token,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/admin`;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          key: token.key,
        },
      };
    },
    async jwt({ token, user }) {
      if (user) {
        const u = user;
        return {
          ...token,
          id: u.id,
          key: u.key,
        };
      }
      return token;
    },
  },
};
