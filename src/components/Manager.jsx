import React from 'react'
import { useRef, useState, useEffect } from 'react'


const Manager = () => {

    const ref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const passRef = useRef()

    const [passwordArr, setPasswordArr] = useState([])

    useEffect(() => {

        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArr(JSON.parse(passwords))
        }
    }, [])





    const showPassword = () => {
        
        if (ref.current.src.includes("icons/eye-hide.svg")) {
            ref.current.src = "icons/eye-show.svg"
            passRef.current.type = "password"
        }
        else {
            ref.current.src = "icons/eye-hide.svg"
            passRef.current.type = "text"
        }
    }

    const savePassword = () => {
        setPasswordArr([...passwordArr, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArr, form]))
        console.log([...passwordArr, form])

    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })

    }



    return (
        <>
            <div className="container h-full w-full items-center px-5 py-24">
                <div className="mx-auto max-w-250 bg-[#0403117d] h-[85vh] p-4 rounded-lg">
                    <div className="logo text-white flex flex-col items-center justify-centre">
                        <div>
                            <span className='text-3xl font-bold'>Pass</span>
                            <span className='text-3xl font-bold text-indigo-500'>EX</span>
                        </div>
                        <p>your own password manager</p>
                    </div>
                    <div className='flex flex-col gap-5 text-white p-4'>
                        <input name='site' onChange={handleChange} value={form.site} placeholder='Website URL' className='border border-[rgba(255,255,255,0.18)] rounded-md py-1.5 px-1.5 focus:outline-none focus:border-[rgb(78,39,177)] transition-colors duration-300' type="text" />
                        <div className='flex gap-8 justify-between'>
                            <input name='username' onChange={handleChange} value={form.username} placeholder='Username' className='border border-[rgba(255,255,255,0.18)] focus:border-[rgb(78,39,177)] focus:outline-none transition-colors duration-300 rounded-md  py-1.5 px-1.5 w-full' type="text" />
                            <div className="relative flex items-center">

                                <input ref={passRef}  name='password' onChange={handleChange} value={form.password} placeholder='Password' className='border border-[rgba(255,255,255,0.18)] focus:border-[rgb(78,39,177)] focus:outline-none transition-colors duration-300 rounded-md py-1.5 px-1.5 w-full' type="password" />
                                <span className='absolute right-2 top-1.5 cursor-pointer' onClick={showPassword}>
                                    <img ref={ref} className='p-0.5' src="icons/eye-show.svg" width={25} alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="button flex justify-center">
                            <button onClick={savePassword} className="flex justify-center items-center gap-1 bg-[#2f13eb] text-white px-3 py-2 rounded-2xl cursor-pointer hover:bg-[#412fe89d]">
                                <lord-icon
                                    src="https://cdn.lordicon.com/gzqofmcx.json"
                                    trigger="loop-on-hover"
                                    colors="primary:white"
                                    style={{ width: 20 }}

                                >
                                </lord-icon>
                                Add password</button>
                        </div>
                    </div>

                    <div className="passwords text-white">
                        <h2 className='text-xl font-bold px-1 pt-3'>Your passwords</h2>
                        {passwordArr.length === 0 && <div className='flex justify-center items-center pt-10'>No passwords to show</div>}
                        {passwordArr.length !== 0 &&
                            <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-white/3 backdrop-blur-lg">
                                <table className="table-auto w-full text-white">

                                    <thead>
                                        <tr className="bg-violet-900/20 border-b border-white/10">
                                            <th className="py-3 px-4 text-left font-semibold text-violet-300">
                                                Website
                                            </th>

                                            <th className="py-3 px-4 text-left font-semibold text-violet-300">
                                                Username
                                            </th>

                                            <th className="py-3 px-4 text-left font-semibold text-violet-300">
                                                Password
                                            </th>

                                            <th className="py-3 px-4 text-center font-semibold text-violet-300">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {passwordArr.map((item, index)=>{
                                            return <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="px-4 py-4">
                                                {item.site}
                                            </td>

                                            <td className="px-4 py-4">
                                                {item.username}
                                            </td>

                                            <td className="px-4 py-4">
                                                {item.password}
                                            </td>

                                            <td className="px-4 py-4">
                                                <div className="flex justify-center gap-3">
                                                    <button className="hover:text-violet-400 transition">
                                                        ✏️
                                                    </button>

                                                    <button className="hover:text-red-400 transition">
                                                        🗑️
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    })}
                                    </tbody>
                                </table>
                            </div>}



                    </div>
                </div>
            </div>
        </>
    )
}

export default Manager
