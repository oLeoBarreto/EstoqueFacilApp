'use client';

import { ChangeEvent, useState } from 'react';
import { PostRequestCompany } from '@/types/company/PostRequestCompany';
import { PostResposeCompany } from '@/types/company/PostResponseCompany';
import { axiosInstance } from '../../services/AxiosInstance';
import { useRouter } from 'next/navigation';

export default function Register() {
    const router = useRouter();

    const [name, setName] = useState('');
    const [cnpj, setCnpj] = useState({ cnpj: '' });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const postNewCompany = async (
        data: PostRequestCompany,
    ): Promise<PostResposeCompany | undefined> =>{
        try {
            let response = await axiosInstance.post("/companies", data);
            console.log("calback response: ");
            console.table(response.data);
            return response.data as PostResposeCompany;
        } catch (err) {
            console.log(err);
        }
    };

    const onSubmit = async () => {
        const company: PostRequestCompany = {
            name: name,
            cnpj: cnpj.cnpj,
            email: email,
            password: password,
        };

        console.log("submit: sending request...");
        console.table(company);
        var companyResponse = await postNewCompany(company);

        if (companyResponse?.id) {
            router.push("/")
        }
    };

    const cnpjMask = (value: string) => {
        return value
            .replace(/\D+/g, '')
            .replace(/(\d{2})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1/$2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
    };

    const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setCnpj({
            ...cnpj,
            [name]: value,
        });
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-raisin-black">
                    Crie uma conta!
                </h2>
                <form
                    className="space-y-6"
                    method="POST"
                    onSubmit={event => {
                        event.preventDefault();
                        onSubmit();
                    }}
                >
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium leading-6 text-raisin-black"
                        >
                            Nome da empresa
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="off"
                                required
                                className="block w-full px-2 rounded-md border-0 py-1.5 text-raisin-black shadow-sm ring-1 ring-inset ring-cambridge-blue-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cambridge-blue-800 sm:text-sm sm:leading-6"
                                onChange={event => {
                                    setName(event.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="cnpj"
                            className="block text-sm font-medium leading-6 text-raisin-black"
                        >
                            CNPJ
                        </label>
                        <div className="mt-2">
                            <input
                                id="cnpj"
                                name="cnpj"
                                type="text"
                                autoComplete="off"
                                required
                                maxLength={18}
                                className="block w-full px-2 rounded-md border-0 py-1.5 text-raisin-black shadow-sm ring-1 ring-inset ring-cambridge-blue-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cambridge-blue-800 sm:text-sm sm:leading-6"
                                value={cnpjMask(cnpj.cnpj)}
                                onChange={inputChange}
                            />
                        </div>
                    </div>
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
                                autoComplete="off"
                                required
                                className="block w-full px-2 rounded-md border-0 py-1.5 text-raisin-black shadow-sm ring-1 ring-inset ring-cambridge-blue-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cambridge-blue-800 sm:text-sm sm:leading-6"
                                onChange={event => {
                                    setEmail(event.target.value);
                                }}
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
                                autoComplete="off"
                                required
                                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-cambridge-blue-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cambridge-blue-800 sm:text-sm sm:leading-6"
                                onChange={event => {
                                    setPassword(event.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-hunter-green px-3 py-2 text-sm font-semibold leading-6 text-seasalt-300 shadow-sm hover:bg-hunter-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hunter-green-600"
                        >
                            Registrar-se
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
