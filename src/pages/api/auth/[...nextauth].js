 import NextAuth from 'nextauth'
 import Providers from 'nextauth/providers'

 export default NextAuth ({
    providers: [
        Providers.google ({
            clientId: process.env.GOOGLEID,
            clientSecret: process.env.GOOGLESECRET
        })
    ]
 })