function Skills() {
    return (
        <section
            id="skills"
            className="py-20 px-6 bg-white"
        >
            <div className="max-w-6xl mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <p className=" text-xl text-[#3F6B4F] font-semibold  mb-2">
                        I always learn new things
                    </p>

                    <h2 className="text-5xl md:text-5xl font-bold text-[#20251F]">
                        Skills
                    </h2>

                    <p className="font-semibold text-[#667066] mt-4 max-w-2xl mx-auto">
                        Technologies, tools and languages that I have learned
                        and used during my studies and projects.
                    </p>
                </div>

                {/* Skills Categories */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Programming Languages */}
                    <div className="bg-[#F5F7F2] border border-[#D5DDD5] rounded-2xl p-8 hover:border-[#3F6B4F] transition">
                        <h3 className="text-2xl font-semibold text-[#20251F] mb-6">
                            Programming Languages
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {["C", "C++", "Java", "Python"].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-white border border-[#D5DDD5] text-[#20251F] rounded-lg"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Web Technologies */}
                    <div className="bg-[#F5F7F2] border border-[#D5DDD5] rounded-2xl p-8 hover:border-[#3F6B4F] transition">
                        <h3 className="text-2xl font-semibold text-[#20251F] mb-6">
                            Web Technologies
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {["HTML", "JavaScript", "CSS", "React", "Tailwind CSS"].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-white border border-[#D5DDD5] text-[#20251F] rounded-lg"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Other Skills */}
                    <div className="bg-[#F5F7F2] border border-[#D5DDD5] rounded-2xl p-8 hover:border-[#3F6B4F] transition">
                        <h3 className="text-2xl font-semibold text-[#20251F] mb-6">
                            Other Skills
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {["Microsoft Office", "Leadership", "Team Coordination"].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-white border border-[#D5DDD5] text-[#20251F] rounded-lg"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Languages & IELTS */}
                    <div className="bg-[#F5F7F2] border border-[#D5DDD5] rounded-2xl p-8 hover:border-[#3F6B4F] transition">
                        <h3 className="text-2xl font-semibold text-[#20251F] mb-6">
                            Languages
                        </h3>

                        <div className="flex flex-wrap gap-3 mb-6">
                            {["Bangla", "English"].map((language) => (
                                <span
                                    key={language}
                                    className="px-4 py-2 bg-white border border-[#D5DDD5] text-[#20251F] rounded-lg"
                                >
                                    {language}
                                </span>
                            ))}
                        </div>

                        <div className="mt-6 border-t border-[#D5DDD5] pt-4">
                            <h4 className="font-bold text-lg text-[#20251F] mb-3">
                                English Proficiency
                            </h4>

                            <span className="px-4 py-2 bg-white border border-[#D5DDD5] text-[#20251F] rounded-lg">
                                IELTS = 6.5
                            </span>

                            
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Skills;