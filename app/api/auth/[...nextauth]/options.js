
import CredentialsProvider from 'next-auth/providers/credentials'
import { getUsers } from '@/sanity/actions'

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "email",
          type: 'text',
          placeholder: "Your Email is: "
        },
        password: {
          label: "Password:",
          type: 'password',
          placeholder: "Your password is: "
        },
      },
      async authorize(credentials) {
        const users = await getUsers()
        const user = users?.find(user => (credentials?.email === user.email && credentials?.password === user.password));
      
        console.log(users);
        if(user) {
          return user
        } else {
          return null
        }
      },
    })
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.id = user.id
        token.name = user.username || undefined
        token.name = user.username || undefined
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken
      session.user.id = token.id
      session.user.name = token.name

      return session
    }
  }
}