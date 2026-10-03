function Footer() {
    return (
        <footer className="bg-[#F5F7F2] text-white  py-8 px-6">
            <div className="max-w-6xl mx-auto">

                
                <div className="flex flex-wrap justify-center md:justify-end gap-4 mb-8">

                    {/* Email */}
                    <a
                        href="mailto:monjuralahi283@gmail.com"
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-[#11afb8] text-[#11afb8] hover:bg-[#11afb8] hover:text-white hover:border-[#11afb8] transition duration-300"
                        aria-label="Email"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 8l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                            />
                        </svg>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/Monjur-046"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-[#11afb8] text-[#11afb8] hover:bg-[#11afb8] hover:text-white hover:border-[#11afb8] transition duration-300"
                        aria-label="GitHub"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 2C6.477 2 2 6.589 2 12.25c0 4.534 2.865 8.38 6.839 9.74.5.095.683-.222.683-.494 0-.244-.009-.891-.014-1.749-2.782.62-3.369-1.388-3.369-1.388-.455-1.184-1.11-1.5-1.11-1.5-.907-.636.069-.623.069-.623 1.004.073 1.533 1.059 1.533 1.059.892 1.572 2.341 1.118 2.912.855.091-.665.349-1.118.636-1.375-2.221-.26-4.555-1.14-4.555-5.073 0-1.12.39-2.035 1.03-2.753-.103-.261-.446-1.307.098-2.725 0 0 .84-.275 2.75 1.051A9.25 9.25 0 0112 6.885a9.2 9.2 0 012.504.351c1.91-1.326 2.748-1.051 2.748-1.051.545 1.418.202 2.464.1 2.725.64.718 1.029 1.633 1.029 2.753 0 3.943-2.337 4.81-4.565 5.064.359.32.678.949.678 1.913 0 1.381-.012 2.493-.012 2.833 0 .275.18.594.689.493A10.26 10.26 0 0022 12.25C22 6.589 17.523 2 12 2z" />
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/monjur-e-alahi-372a8a363/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-[#11afb8] text-[#11afb8] hover:bg-[#11afb8] hover:text-white hover:border-[#11afb8] transition duration-300"
                        aria-label="LinkedIn"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M5.164 7.048H1.56V20h3.604V7.048zM3.362 2C2.204 2 1.25 2.955 1.25 4.11c0 1.154.954 2.111 2.112 2.111 1.157 0 2.111-.957 2.111-2.111A2.11 2.11 0 003.362 2zM20.75 12.57c0-3.897-2.078-5.711-4.852-5.711-2.238 0-3.237 1.23-3.795 2.095h-.05V7.048H8.6V20h3.603v-6.42c0-1.692.321-3.331 2.416-3.331 2.061 0 2.086 1.936 2.086 3.44V20H20.3l.45-7.43z" />
                        </svg>
                    </a>

                </div>

                
                <div className="text-center md:text-right">

                    <p className="text-lg text-black font-semibold">
                        Monjur E Alahi
                    </p>

                    {/*<p className="text-[#AAB5AA] text-sm mt-4">
                        ©2026 monjur-e-alahi. All rights reserved.
                    </p> */}

                </div>

            </div>
        </footer>
    );
}

export default Footer;