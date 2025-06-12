'use client';
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Menu, X, CheckCircle, Database, Code, Settings, Calendar, MapPin, ExternalLink, Send, LucideIcon } from 'lucide-react';
import portfolioData from './Portfolio.json';

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const { navItems, frontendSkills, backendSkills, toolsSkills, experiences, projects } = portfolioData;

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Adjust this value based on your header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(sectionId);
        }
    };

    const iconMap: Record<string, LucideIcon> = {
        Database,
        Settings,
        Code,
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        alert('Message sent! Thank you for reaching out.');
        setFormData({ name: '', email: '', message: '' });
    };

    const SkillBar = ({ skill, level }: { skill: string; level: number }) => (
        <div className="mb-4">
            <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">{skill}</span>
                <span className="text-gray-500">{level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Priya Joshi
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-gray-600 hover:text-blue-600 transition-colors ${activeSection === item.id ? 'text-blue-600 font-medium' : ''
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4 border-t">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        scrollToSection(item.id);
                                        setIsMenuOpen(false);
                                    }}
                                    className={`block w-full text-left py-2 text-gray-600 hover:text-blue-600 transition-colors ${activeSection === item.id ? 'text-blue-600 font-medium' : ''
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div>
                                <p className="text-blue-600 text-lg font-medium mb-2">Hello, I&apos;m</p>
                                <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        Priya Joshi
                                    </span>
                                </h1>
                                <h2 className="text-2xl lg:text-3xl text-gray-700 font-medium mb-6">
                                    Senior Software Engineer
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Results-driven Software Engineer with 5+ years of experience building scalable and accessible web applications. Specialized in React, Next.js, TypeScript, Node.js, and Redux, with strong proficiency in JavaScript, Git, and SQL Server. Skilled in component-driven development using Storybook and passionate about implementing a11y best practices. Adept at collaborative development workflows using GitHub and CI/CD pipelines.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
                                <a
                                    href="mailto:priyajoshi.pj.22@gmail.com"
                                    className="flex items-center gap-2 hover:underline text-blue-600"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Mail size={20} />
                                    <span>priyajoshi.pj.22@gmail.com</span>
                                </a>
                                <a
                                    href="tel:+919958749459"
                                    className="flex items-center gap-2 hover:underline text-blue-600"
                                >
                                    <Phone size={20} />
                                    <span>+91-9958749459</span>
                                </a>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href="https://www.linkedin.com/in/priyajoshipj/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="https://github.com/priyajoshipj"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                                    aria-label="GitHub"
                                >
                                    <Github size={20} />
                                </a>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                >
                                    View My Work
                                </button>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                                >
                                    Get In Touch
                                </button>
                            </div>
                        </div>

                        <div className="relative w-80 h-80 mx-auto flex items-center justify-center">
                            {/* Gradient background layers */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
                            <div className="absolute inset-4 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-2xl"></div>
                            <div className="absolute inset-8 bg-gradient-to-br from-blue-600/40 to-purple-600/40 rounded-full blur-xl"></div>
                            <div className="absolute inset-12 bg-white/10 rounded-full backdrop-blur-sm border border-white/20"></div>
                            <img
                                src="https://robohash.org/priyajoshi?set=set7"
                                alt="Avatar"
                                width={192}
                                height={192}
                                className="relative z-10 rounded-full object-cover border-4 border-white shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-blue-600 font-medium mb-2">What I Know</p>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
                        <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Frontend Skills */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <Code size={24} className="text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">Frontend</h3>
                            </div>
                            {frontendSkills.map((skill, index) => (
                                <SkillBar key={index} skill={skill.name} level={skill.level} />
                            ))}
                        </div>

                        {/* Backend Skills */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-purple-100 rounded-lg">
                                    <Database size={24} className="text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">Backend</h3>
                            </div>
                            {backendSkills.map((skill, index) => (
                                <SkillBar key={index} skill={skill.name} level={skill.level} />
                            ))}
                        </div>

                        {/* Tools & Technologies */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-green-100 rounded-lg">
                                    <Settings size={24} className="text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">Tools & Technologies</h3>
                            </div>
                            {toolsSkills.map((skill, index) => (
                                <SkillBar key={index} skill={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-blue-600 font-medium mb-2">My Professional Journey</p>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
                        <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

                        {experiences.map((exp, index) => (
                            <div key={index} className="relative mb-12 last:mb-0">
                                {/* Timeline dot */}
                                <div className="absolute left-6 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>

                                <div className="ml-20">
                                    <div className="bg-blue-50 p-6 rounded-xl">
                                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                                                <p className="text-blue-600 font-semibold text-lg">{exp.company}</p>
                                            </div>
                                            <div className="flex flex-col lg:items-end mt-2 lg:mt-0">
                                                <div className="flex items-center gap-2 text-gray-600 mb-1">
                                                    <Calendar size={16} />
                                                    <span className="font-medium">{exp.period}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <MapPin size={16} />
                                                    <span>{exp.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 space-y-3">
                                        {exp.achievements.map((achievement, achIndex) => (
                                            <div key={achIndex} className="flex items-start gap-3">
                                                <CheckCircle size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                                <p className="text-gray-600 leading-relaxed">{achievement}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-blue-600 font-medium mb-2">My Recent Work</p>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
                        <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => {
                            const IconComponent = iconMap[project.icon as keyof typeof iconMap] || Code;
                            return (
                                <div key={index} className="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`p-3 bg-gradient-to-r ${project.gradient} rounded-lg`}>
                                                {IconComponent && <IconComponent size={24} className="text-white" />}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                                        </div>

                                        <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                                        <div className="mb-6">
                                            <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                                            <ul className="space-y-1">
                                                {project.keyFeatures.map((feature, fIndex) => (
                                                    <li key={fIndex} className="text-sm text-blue-600">• {feature}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="font-semibold text-gray-800 mb-3">Technologies:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, tIndex) => (
                                                    <span key={tIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            {project.gitSource && (
                                                <a
                                                    href={project.gitSource}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors text-sm font-medium"
                                                >
                                                    <Code size={16} />
                                                    Code
                                                </a>
                                            )}
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex items-center gap-2 bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium`}
                                                >
                                                    <ExternalLink size={16} />
                                                    Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-blue-600 font-medium mb-2">Let&apos;s Connect</p>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
                        <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            I&apos;m always interested in new opportunities and exciting projects. Whether you
                            have a question or just want to say hi, feel free to reach out!
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h3>

                            <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                <div className="bg-blue-50 p-6 rounded-xl text-center">
                                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <Mail className="text-white" size={24} />
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                                    <a
                                        href="mailto:priyajoshi.pj.22@gmail.com"
                                        className="flex items-center gap-2 hover:underline text-blue-600"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span>priyajoshi.pj.22@gmail.com</span>
                                    </a>
                                </div>

                                <div className="bg-blue-50 p-6 rounded-xl text-center">
                                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <Phone className="text-white" size={24} />
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
                                    <span>+91-9958749459</span>
                                </div>

                                <div className="bg-blue-50 p-6 rounded-xl text-center">
                                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <a
                                            href="https://www.linkedin.com/in/priyajoshipj/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-blue-100 transition-colors"
                                            aria-label="LinkedIn"
                                        >
                                            <Linkedin size={24} />
                                        </a>
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-2">LinkedIn</h4>
                                    <p className="text-gray-600 text-sm">linkedin.com/in/priyajoshipj</p>
                                </div>

                                <div className="bg-blue-50 p-6 rounded-xl text-center">
                                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <a
                                            href="https://github.com/priyajoshipj"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-blue-100 transition-colors"
                                            aria-label="GitHub"
                                        >
                                            <Github size={24} />
                                        </a>
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-2">GitHub</h4>
                                    <p className="text-gray-600 text-sm">github.com/priyajoshipj</p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
                                <h4 className="text-xl font-bold mb-3">Let&apos;s Work Together</h4>
                                <p className="text-blue-100">
                                    I&apos;m currently open to new opportunities and would love to discuss
                                    how my skills and experience can contribute to your team.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-xl">
                                <div className="bg-white p-8 rounded-lg">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="John Doe"
                                                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Your Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="john@example.com"
                                                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder="Hello Priya, I&apos;d like to discuss a project..."
                                                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                rows={5}
                                            />
                                        </div>
                                        <button
                                            onClick={handleSubmit}
                                            className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                                        >
                                            <Send className="inline-block mr-2" size={20} />
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;