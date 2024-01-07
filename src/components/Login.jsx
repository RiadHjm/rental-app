import React from 'react'
import '../style/logo.css'

const Login = () => {
    return (
            <div className='bg-[#F8F8F8] h-[100vh] flex'>
                <div className='container m-auto h-[67vh] items-center bg-white rounded-md shadow-md' >
                    <div className='lg:grid grid-cols-2 gap-5 items-center'>
                        <div className='h-[80vh] p-4'>
                            <div className='bg-[#F6F6F6] rounded-sm text-center items-center'>
                                <img className='w-full rounded-md' src='car-rental.svg' alt='AuthentificationImg' />
                            </div>
                        </div>

                        <div className='flex flex-col mb-10'>
                            <div className="text-center mb-4 text-xl font-semibold text-silverGrey">
                                <span className='text-5xl text-logo-gradient font-semibold'>
                                    CarRental
                                </span>
                                Connexion
                            </div>
                            <p className='text-center'>Location Simplifiée. Réservez maintenant!</p>

                            <div className='px-[50px]'>
                                <form>
                                    <div class="relative z-0 w-full mb-6 group mt-10">
                                        <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Adresse E-mail</label>
                                    </div>
                                    <div class="relative z-0 w-full mb-6 group">
                                        <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mot de Passe</label>
                                    </div>
                                    <div className="mt-10 text-center">
                                        <button type="button" class="text-white bg-blueLogo ease-in-out duration-300 hover:bg-silverGrey font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-blueLogo dark:hover:bg-blueLogo ">Connection</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Login