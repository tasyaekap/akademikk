'use strict'
const User = use('App/Models/User');

class AuthController {
    async register({ request, auth, response }) {
        const username = request.input("username")
        const email = request.input("email")
        const password = request.input("password")

        let user = new User()
        user.username = username
        user.email = email
        user.password = password

        user = await user.save()
        return response.json({ message: 'User Berhasil Didaftarkan!' })
    }

    async postLogin({ request, auth }) {
        const { email, password } = request.all()
        return auth
            .withRefreshToken()
            .attempt(email, password)
    }

    async getProfile({ response, auth }) {
        return response.send(auth.current.user)
    }

    async postRefreshToken({ request, auth }) {
        const refreshToken = request.input('refresh_token')
        return await auth
            .newRefreshToken()
            .generateForRefreshToken(refreshToken)
    }

    async postLogout({ auth, response }) {
        const apiToken = auth.getAuthHeader()
        const refreshToken = ''
        await auth
            .authenticator('jwt')
            .revokeTokens([refreshToken])
        return response.send({ message: 'Logout successfully!' })
    }

}


module.exports = AuthController