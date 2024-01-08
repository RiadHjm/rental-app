import React from 'react'
import Logo from './Logo'
import '../style/logo.css'

const Footer = () => {
    return (
        <>
            <footer className="bg-white dark:bg-gray-900 mt-10" >
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="/">
                                <Logo></Logo>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-32 sm:grid-cols-2">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-blueLogo uppercase dark:text-white">Resources</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Accueil</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">À propos</a>
                                    </li>
                                    <li>
                                        <a href="/" className="hover:underline">Contactez-nous</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-blueLogo uppercase dark:text-white">Follow us</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline ">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="/" className="hover:underline">Instagram</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline"><span className='text-logo-gradient font-extrabold'>CarRental</span>Management</a>. Tous droits réservés.
                        </span>
                        <div className="flex mt-4 gap-6 sm:justify-center sm:mt-0">
                            <a href="/">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEVklEQVR4nNVXW2hcZRDearXeQfCGoqAPVYuKGkmTM7NZqxbqHR/6UFTEy0OffPN+WV9Kc2bOFgOlrVZiqoiSB61gBR9KUWv1obTJmdmNjYiXegOVYi9Ibe3K9+822Wz2rGYTQQcWdmf//8z3zz/fN3Nyuf+TFYrb5ufVbyLx50j9dRZ7l9Q24zt8UWxLsGbOA/f125UsNsRiv5L4URYfIfH3WPwVfOrf4TvKar+Q2qu9SXrFrAP36sh5pPYyqR8hsQ9Z/UFetevcrPX4j+L0IVb7CHtYbQOe0VHwfFy5ntT3sphFcfm2Ge/X9HYSK5P4t31J+boZbSa1O1n9EKu9USh+dUquQ+sp7TiVxN8k8YMc2x3/+OSsfojEV+Wq1Xm52Vq1Oo/VVgPE32aiN9y578XJ5yT4FBD+Fqt9066Gcig43DlS1+jPa7mPxF8D3aI4vaETDF3FnaeReoXF12dSjdSPNBccJc4s/gf4HqpbbE+uWD2hExCoLcRoSVEWGwLVpqVOfAyZwc98YhcHSmr51k4A1ON8TGKDU5yF4rb5EBnwvNHfq5WrWL2KwBMPUH8bwtMpAFJ7GGI1RTGj2JYEFWsqEJwU/saU44pY7c8oHjuzEwCLX0zPx35Su3HCyerPQ0qbF/eVRq8OGdCRSxsoNUxq453WQTiYeEpqzzYC2NQqreFq1L4HwNrG9B5kpFMmTMazLai5SQe6mvjGVovzao+x2v6e0u6LWH1RjRH+wKwAoIGpbZ5wkNg7WfzsemnnSay2m9U/QNo5tqdJ7XeO08JcAhiEUmVuwMnV9pNaqfbbNrDYb3kp3318TUH8AhLbhU8+sUeWDYwvyAZg76NlTwJQf4rUR9uhPs4IEn9y+fDwiaQes9ixILFJ2kXin9QBrAFYFv+ONX20laSjCFnsmQZE5VtqKtieWpz4ClY7TOIDuA5INKvvAFNI7Ufq90vCutXp2aT2AuiGCaoVDadc4bKB8QUkvo/V7m8HIKBP0qUkdoDEtvKa9DL4IvFrmwePWiCv5vu9u9GP6yGxn5HF5rRsnCbFGQYtJ7HPQjbQwLS8uPH/pTpyOq4GnXVR0U+eEkd9+zQphnFSWRjuuFGh2hkYIeXlLPYpTspiX2D4CIHF95HYD1Sq9DRuQdGCxlE8evn0B1ZD4/kp0nRlboYG8EEvaoPrEIqvuZ5CVkJj83WtHyLpNeEkSWVhbq6tLuEs9nUh+fycDAD2OIt/+W8EB2UxkqFYM9eR2NbM9HRomIJC8xI/iCk5c2FhrZ+Bio4Sv2vam1C/d3fSfOoFN4a0tz355Bhuh4OAlCo9rP4E5DIoWq3Cj2EcY0nv6x4YPyuXYeB+4Ln69nrTWpd5543GamtrCmcHgqqJ7QG/o8TvRRcMvMcbEugVRjIfrRWVrw+vZ2pbgrxC4fBqJjbYmmoZFmm6MjSYxFdE8diFWesgKpyUb0Y/QBB00dqw6pug7ZDXaQr3X7e/ANu09XL8O+3aAAAAAElFTkSuQmCC" />
                            </a>
                            <a href="/">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADzUlEQVR4nO1XS4tUVxC+Y3CiBAWTiEH0DwzRPMbH2FU9HRAfqIgQxUSyCbgyhmRlfCQ00ajTVbfRQVQGslEQcZaCuPCxkChZDMa+VT3qDGQWySIaFYPPMeiVOj230zN9+3bPAyFgwYHbp86p+s45VV9Ve97/WTLZgSk2XomzlZ19byLpSiQ9iiSCJHeRNXTDvkkEWI+kfVnRktXmCXPcktVmJP0aWG8j6TMgOY8k24B0U5qL7TbsuzQn54H1XyS9BaRftXb1TB6X81QuWIAk/cB6H1h34P5gRr09tgZzshNJ/gGWvna/+NEYnctGZH0EpCcX7ut9Z7T7M/6Nd5HklNlAKm4Yg3N5bifxwrDJG6uEYROwfO9ssa5vaA/6QSuSPnbOGwJ7fTayfgmsPyFJh7t+li1IwfxoDZD+AKQP6z5Hiws46bdrr3vybDjJOWUZBJK/keVSKUC1xw5guvLaMGyy5wCSm4mBiaVov2/vV+/kyLIbSB6gr58bmBG6S8MA2NzeqzMtMO12kvL8lkV7PecZ0veA5ClS8EU0l8pdn5bKFVdZwAFr70gApQPKLiT9K5YnsEQyzxpJtbQvmw3shu7uNxygjsIcYBkoExNrGAegLa9vG0+kSJbHAThqb+g1IEDaCSxnK/YeRNJrbfkrU+vtRdaLQHo4BoAYvW5rEMBxZDlR/s36S9yJa+zdDqyFOAB3keWzRoyYc2Q9VgGgMArwm5DlzrDJTHZgCpK8wFyQSdh4GEm6hkb/SABA8muFvitN8mmsHZZPzNewKtqWvzLVAscKS8KpB+2qkaXbBrBu/U+nHM0PjUErRnF2zIf5qirj6HK0Nl2a0ZSva2vphx9GnqNfXJpQY+5VKYCkiKzfJQFw72fVbn8wYxlfeyvSLersmx7Ng6/oTthRmBNnx1VVEolTHEGWc0kAKvO8KggrOYD0YS0qB5ILSHKo+mp8XQssT2qV3nSu92NXqPyg1TigOgi1M9Iv4d7342wYxRuDpjlYXYuK/0TSbK1bGG8aAsmPwPqH+Ypf4Ms3lqOLDwazJhqA2bTgq5Ud5Qi2QoKkp72JBGDlmOWMBXrdLhry8oHFApLumSgAQLrXeoT2fGFeovNIjJKtajl+H1HrRwUgG06yLsl1yg3SfFmMSkupJ+es7RotAFeiSS64vsEvrvPGIinSD4dy/BGw5CNySQKQ9mUush5w3TDLb2bDG4+0ZLUZSL4F0t9dwSLtsX4/hgcul/pBeWFrbc+4/5hUinU/mJM11nwAyVUk/TnSDTWiPY6McrIm6pRei9eAvATrWOIVI5UskQAAAABJRU5ErkJggg==" />
                            </a>
                            <a href="/">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC9UlEQVR4nNVXO08UURQeV/0BRmMhlhoj2q0kMOcAMcY3MTZWxvgXBHyU2ylzzizEV+FfoJfY2RC0MEH2nEXEII02PjqxUMiYc3c3PGZmZ0dGjV9ym9259/vO655zPe9/wGDl+S68V9uTZ9mebZHCWP0YkD4GlmVkWUPWKN+SNSB9b2cga3fHxOUnr3YD6X0gXQXWaSC54ZOcwbBWzrPcHtZhZJ2xs5B1ItMr5Qb5MyD57Af1C15BwECG7EwkmWorAsxy1k+9VT3kFYyBoH4YWb6YJxI/6OP54+aqIi3fCj/US81wxHMCXMLpdFFkGNZPIctHIBnf9DvJCyR5GBfAsmwJl4slina4lQBgDVw1kH7YLEBHkHQpXucsaxDWTmdxDo7NHTSrkOQdkv6wBSyLwFLtrc52tb7r49f7TYQfyMmN+606LAybkrHn7vxepzaslduRA+t1JP0OrHNActPyxVY/yy0grdl/yHKt3Rl+UDthXMa5blW4sC9LgJG7BCId8SpRKfZBJSo1hay2E+HuCdbIODsWYG531hl5BswzyLqyMRzbFgAk4+biRMu3ohKVkESQJCxOAMuiuTeTvEXCegdZF4oRUIlKwPoTSc91KsAS06ojyWO/JQBdqdXPdyqgn2sXixPg/esQeE5AtdMkvDI5uRNZFFm5MAG91dkuKy0rsU6sB9JvfvDmQGECDHa52CXjQpHgiYbljnzVD/Wql4JEAT3Nq9iuybSNLRHmiWad37ZkcwnnYu7cvtKOPP0qrjSakTUKLwMuHCQhkLxtNSNLOCClNLdvRH8oZ2PNyNAYPnXYK6gdpwFYR2Pt2IAsj2yA9P4wgOQlsDyI/YGs3a6TBTL0p8gxrF+2W3VgTI4mf8A6YdOrDZBFk/vB3BEk+ZrWpNaTkWTKplcbIL0CLXfkLE8z3waDriLME256nbEZwDI378PEZTvraCPm1swkzPVcQ9Zum14tY5ticj3NmtPTkp2RGnOvQ7hbLufj1PZsi/Rv4RfyQ/bVfHcivgAAAABJRU5ErkJggg==" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer