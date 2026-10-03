function Contact() {
    return (
        <section
            id="contact"
            className="py-20 px-6 bg-white"
        >
            <div className="max-w-6xl mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-12">
                    <p className=" text-2xl text-[#3F6B4F] font-semibold font-medium mb-2">
                        Get In Touch
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#20251F]">
                        Contact Me
                    </h2>

                    <p className="text-xl text-[#667066] font-medium mt-4 max-w-2xl mx-auto">
                        If you would like to get in touch with me, feel free
                        to contact me through email or connect with me on
                        social media.
                    </p>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-3 gap-6">

                    {/* Email */}
                    <a
                        href="mailto:monjuralahi283@gmail.com"
                        className="bg-[#F5F7F2] border border-[#D5DDD5] rounded-2xl p-8 hover:border-[#3F6B4F] transition text-center"
                    >
                        <h3 className="text-xl font-semibold text-[#20251F] mb-3">
                            Email
                        </h3>

                        <p className="text-xl text-[#667066]">
                            monjuralahi283@gmail.com
                        </p>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/Monjur-046"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#F5F7F2] border border-[#D5DDD5] rounded-2xl p-8 hover:border-[#3F6B4F] transition text-center"
                    >
                        <h3 className="text-xl font-semibold text-[#20251F] mb-3">
                            GitHub
                        </h3>

                        <p className="text-xl text-[#667066]">
                            github.com/Monjur-046
                        </p>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/monjur-e-alahi-372a8a363/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#F5F7F2] border border-[#D5DDD5] rounded-2xl p-8 hover:border-[#3F6B4F] transition text-center"
                    >
                        <h3 className="text-xl font-semibold text-[#20251F] mb-3">
                            LinkedIn
                        </h3>

                        <p className="text-xl text-[#667066]">
                            Connect With Me
                        </p>
                    </a>

                </div>
            </div>
        </section>
    );
}

export default Contact;