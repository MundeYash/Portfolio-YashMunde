import React from "react";

const Footer = () => (
    <div>
        <div className="flex justify-center gap-6 mb-2">
            <div className="relative group">
                <a href="https://github.com/MundeYash" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                    className="transition-transform duration-200 hover:scale-125 hover:shadow-lg hover:z-10"
                >
                    <img src="https://imgs.search.brave.com/KAOX97wrrela7d17S5JmVr7RR7ngySS-jp8HJ2W_o5I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE4LzI3/LzgwLzE4Mjc4MGVl/NTMzMmUwYzMyMTMw/ZGMyZDY5YzU1MTMw/LmpwZw" alt="GitHub Logo" className="w-7 h-7" />
                </a>
                <span className="absolute left-1/2 -translate-x-1/2 -top-8 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">GitHub</span>
            </div>
            <div className="relative group">
                <a href="https://leetcode.com/u/yashmunde68/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode"
                    className="transition-transform duration-200 hover:scale-125 hover:shadow-lg hover:z-10"
                >
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/leetcode.svg" alt="LeetCode Logo" className="w-7 h-7" style={{ filter: 'invert(1)' }} />
                </a>
                <span className="absolute left-1/2 -translate-x-1/2 -top-8 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">LeetCode</span>
            </div>
            <div className="relative group">
                <a href="mailto:yashmunde68@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Mail"
                    className="transition-transform duration-200 hover:scale-125 hover:shadow-lg hover:z-10"
                >
                    <img src="https://imgs.search.brave.com/jHRWi4W0GD7xo7ToXCKZMdUCDu_svlXqmXsQNvLnTlQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzUxMTAyOS5qcGc" alt="Mail Icon" className="w-7 h-7" style={{ filter: 'invert(1)' }} />
                </a>
                <span className="absolute left-1/2 -translate-x-1/2 -top-8 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">Mail</span>
            </div>
            <div className="relative group">
                <a href="https://www.linkedin.com/in/yash-munde-770691218/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                    className="transition-transform duration-200 hover:scale-125 hover:shadow-lg hover:z-10"
                >
                    <img src="https://imgs.search.brave.com/AQIoyb6VrYjFSaBNNFOLZf9jaw8fUTsAoJaTTRdkymw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zbWFs/bGltZy5wbmdrZXku/Y29tL3BuZy9zbWFs/bC81NTMtNTUzODU4/N19saW5rZWRpbi1s/b2dvLXdoaXRlLWNp/cmNsZS10cmFuc3Bh/cmVudC1wbmctbGlu/a2VkaW4tdHJhbnNw/YXJlbnQucG5n" alt="Linkedin Icon" className="w-7 h-7" style={{ filter: 'invert(1)' }} />
                </a>
                <span className="absolute left-1/2 -translate-x-1/2 -top-8 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">LinkedIn</span>
            </div>
        </div>

        <footer className="w-full py-4 bg-primary text-center border-t border-secondary mt-8">
            <p className="text-white text-sm font-medium">
                &copy; {new Date().getFullYear()} Made by Yash Munde
            </p>
        </footer>
    </div>
);

export default Footer;
