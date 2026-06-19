import React from 'react'

const Navbar = () => {
    return (
        <nav className='fixed top-0 z-50 w-full border-b border-white/5 bg-black/30 backdrop-blur-md text-white'>
            <div className='mx-auto flex items-center justify-between max-w-[60%] md:justify-around  py-4'>

                <div className='font-bold text-2xl'>


                    <span className='text-white'>Pass</span>
                    <span className='text-indigo-500'>EX</span>
                </div>

                <button onClick={() => {
                  window.open("https://github.com/yogeshcodeshere/PassEX-password-manager", "_blank")
                }
                } className="cursor-pointer flex gap-2 justify-center items-center rounded-lg bg-violet-600 px-3 py-1.5 text-white transition hover:bg-violet-500">
                    <img src="icons/github.svg" alt="" width={20} />
                    Github
                </button>

            </div>
        </nav>
    )
}

export default Navbar
