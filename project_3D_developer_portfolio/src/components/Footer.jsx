import React from "react";
const Footer = () => (
    <footer className="w-full py-4 bg-primary text-center border-t border-secondary mt-8">
        <p className="text-white text-sm font-medium">
            &copy; {new Date().getFullYear()} Made by Yash Munde
        </p>
    </footer>
);

export default Footer;
