import { SimpleLayout } from '@/app/layout'
import React from 'react'

const Signin = () => {
    return (
        <SimpleLayout>
            <div>
                <form action="">
                    <fieldset>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div className='mb-4'>
                            <label>
                                Password
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                            </label>
                        </div>
                        <button>Send</button>
                    </fieldset>
                </form>
            </div>
        </SimpleLayout>
    )
}

export default Signin