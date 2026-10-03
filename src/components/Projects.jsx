function Projects() {
    return (
        <section
            id="projects"
            className="py-20 px-6 bg-[#F5F7F2]"
        >
            <div className="max-w-6xl mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-12">
                    <p className="text-xl text-[#3F6B4F] font-medium font-semibold mb-1">
                        Projects I have done
                    </p>

                    <h2 className="text-5xl md:text-5xl font-bold text-[#20251F]">
                        Projects
                    </h2>

                    <p className="text-xl text-[#667066] font-medium mt-2">
                        Here are some of the projects I have worked on and some projects are under development
                    </p>
                </div>

                {/* Project Card */}
                <div className="bg-white border border-[#D5DDD5] rounded-2xl p-8 hover:border-[#3F6B4F] transition">

                    <h3 className="text-2xl font-bold text-[#20251F] mb-4">
                        Bank Management System
                    </h3>

                    <p className="text-xl text-[#667066] leading-relaxed mb-6 max-w-3xl">
                        A banking management system application designed to
                        manage basic banking operations and customer information.
                    </p>

                    {/* Technologies Used */}
                    <div className="mb-6">
                        <h4 className="text-xl text-[#20251F] font-semibold mb-3">
                            Technologies Used
                        </h4>

                        <div className="flex flex-wrap gap-2">
                            {["Java","CSS", "Tailwind CSS", "MySQL",].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-[#F5F7F2] border border-[#D5DDD5] text-[#20251F] rounded-lg"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* GitHub Button */}
                    <a
                        href="https://github.com/Monjur-046"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl inline-block px-6 py-3 bg-[#11afb8] text-white rounded-lg font-medium hover:bg-[#00abab] transition"
                    >
                        View on GitHub
                    </a>

                </div>
            </div>
        </section>
    );
}

export default Projects;