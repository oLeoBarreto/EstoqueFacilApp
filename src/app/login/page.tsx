export default function Login() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-raisin-black">
                    Entrar na sua conta!
                </h2>
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-raisin-black"
                        >
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full px-2 rounded-md border-0 py-1.5 text-raisin-black shadow-sm ring-1 ring-inset ring-cambridge-blue-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cambridge-blue-800 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Senha
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-cambridge-blue-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cambridge-blue-800 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-hunter-green px-3 py-2 text-sm font-semibold leading-6 text-seasalt-300 shadow-sm hover:bg-hunter-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hunter-green-600"
                        >
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
