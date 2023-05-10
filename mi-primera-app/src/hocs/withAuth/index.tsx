const withAuth = (Component) => {

    const { user } = useAuth()


    const unaFuncion = () => {

        if(!user) // redirigir a login

    }

    return unaFuncion

}

export { withAuth }