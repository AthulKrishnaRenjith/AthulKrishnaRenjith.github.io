import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaRobot, FaBrain, FaCode, FaMicrochip, FaDownload, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import { SiRos, SiOpencv, SiPytorch, SiDocker, SiNvidia, SiCplusplus, SiPython, SiCheckmarx } from 'react-icons/si';

const Section = ({ title, children, className = "" }) => (
    <section className={`py-16 px-4 sm:px-8 max-w-7xl mx-auto ${className}`}>
        <h2 className="text-3xl font-bold mb-12 text-slate-100 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
            {title}
        </h2>
        {children}
    </section>
);

const Card = ({ children, className = "" }) => (
    <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-xl hover:bg-slate-800/80 transition-all duration-300 ${className}`}>
        {children}
    </div>
);

const Badge = ({ text, icon: Icon }) => (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full hover:bg-blue-500/20 transition-colors cursor-default">
        {Icon && <Icon className="w-3.5 h-3.5" />}
        {text}
    </span>
);

const Landing = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">

            {/* Hero Section */}
            <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-slate-950 to-slate-950" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    {/* Animated Ring */}
                    <div className="relative mx-auto w-32 h-32 mb-8 group">
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <div className="relative w-full h-full bg-slate-900 rounded-full border-2 border-blue-500/30 flex items-center justify-center shadow-2xl overflow-hidden">
                            <FaRobot className="w-16 h-16 text-blue-500" />
                        </div>
                    </div>

                    <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 tracking-tight">
                        Athul Krishna Renjith
                    </h1>
                    <p className="text-xl sm:text-2xl text-blue-400 mb-8 font-light">
                        Robotics & AI Engineer
                    </p>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
                        Focused on edge deployment of real-time autonomous systems.
                        Specializing in computer vision, SLAM, and optimizing perception pipelines on Jetson hardware.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a href="mailto:renjith.athul.krishna@gmail.com" className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all transform hover:-translate-y-0.5 shadow-lg shadow-blue-900/20">
                            <FaEnvelope /> Email Me
                        </a>
                        <a href="https://github.com/AthulKrishnaRenjith" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all transform hover:-translate-y-0.5 border border-slate-700">
                            <FaGithub /> GitHub
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all transform hover:-translate-y-0.5 border border-slate-700">
                            <FaLinkedin /> LinkedIn
                        </a>
                        <div className="flex items-center gap-2 px-5 py-2.5 text-slate-400">
                            <FaPhone className="text-slate-500" /> +44 7455755478
                        </div>
                    </div>
                </div>
            </header>

            {/* Skills Section */}
            <Section title="Technical Arsenal" className="bg-slate-900/50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                            <FaCode className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-3">Languages & Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Python', 'C++', 'C', 'SQL', 'Git', 'MLOps'].map(s => (
                                <Badge key={s} text={s} />
                            ))}
                        </div>
                    </Card>
                    <Card>
                        <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                            <SiNvidia className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-3">Edge AI & Deployment</h3>
                        <div className="flex flex-wrap gap-2">
                            {['TensorRT', 'OpenVINO', 'Jetson', 'Docker', 'ONNX'].map(s => (
                                <Badge key={s} text={s} />
                            ))}
                        </div>
                    </Card>
                    <Card>
                        <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                            <SiOpencv className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-3">Computer Vision</h3>
                        <div className="flex flex-wrap gap-2">
                            {['YOLO (v5/v9)', 'PyTorch', 'OpenCV', 'Semantic Seg.', 'Latent Diffusion'].map(s => (
                                <Badge key={s} text={s} />
                            ))}
                        </div>
                    </Card>
                    <Card>
                        <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                            <SiRos className="w-6 h-6 text-orange-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-3">Robotics & Control</h3>
                        <div className="flex flex-wrap gap-2">
                            {['ROS2 (Foxy/Jazzy)', 'Gazebo', 'SLAM', 'Kinematics', 'Planning'].map(s => (
                                <Badge key={s} text={s} />
                            ))}
                        </div>
                    </Card>
                </div>
            </Section>

            {/* Experience Section */}
            <Section title="Professional Experience">
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">

                    {/* ISE Research */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-[.is-active]:border-emerald-500 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <FaLaptopCode className="text-emerald-500 w-5 h-5" />
                        </div>
                        <div className="w-full md:w-[calc(50%-2.5rem)] pl-8 md:pl-0 md:pr-14 md:group-even:pl-14">
                            <Card className="hover:border-emerald-500/30 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Research Engineer</h3>
                                        <div className="text-emerald-400 font-medium">ISE Research Team</div>
                                    </div>
                                    <span className="text-xs font-mono bg-slate-700 px-2 py-1 rounded text-slate-300">May 2025 – Present</span>
                                </div>
                                <div className="text-sm text-slate-400 mb-4 font-mono">Hatfield, UK</div>
                                <ul className="space-y-2 text-slate-300 list-disc list-inside marker:text-emerald-500">
                                    <li>Researching perception and visual SLAM for ship geo-localisation in GNSS-denied environments.</li>
                                    <li>Developed semantic segmentation for shore isolation and YOLOv5 for dynamic feature extraction.</li>
                                </ul>
                            </Card>
                        </div>
                    </div>

                    {/* UH Racing */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <SiRos className="text-blue-500 w-5 h-5" />
                        </div>
                        <div className="w-full md:w-[calc(50%-2.5rem)] pl-8 md:pl-0 md:pr-14 md:group-even:pl-14">
                            <Card>
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Robotics Engineer</h3>
                                        <div className="text-blue-400 font-medium">UH Racing Autonomous</div>
                                    </div>
                                    <span className="text-xs font-mono bg-slate-700 px-2 py-1 rounded text-slate-300">Sep 2024 – Aug 2025</span>
                                </div>
                                <div className="text-sm text-slate-400 mb-4 font-mono">Hatfield, UK</div>
                                <ul className="space-y-2 text-slate-300 list-disc list-inside marker:text-blue-500">
                                    <li>Delivered YOLOv9 perception system with TensorRT (FP16), achieving 52 FPS real-time inference.</li>
                                    <li>Integrated stereo depth sensing and supported GraphSLAM, PID, and Pure Pursuit development.</li>
                                </ul>
                            </Card>
                        </div>
                    </div>

                    {/* Robotics Club */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <FaMicrochip className="text-amber-500 w-5 h-5" />
                        </div>
                        <div className="w-full md:w-[calc(50%-2.5rem)] pl-8 md:pl-0 md:pr-14 md:group-even:pl-14">
                            <Card>
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Robotics Engineer</h3>
                                        <div className="text-amber-400 font-medium">Robotics Club</div>
                                    </div>
                                    <span className="text-xs font-mono bg-slate-700 px-2 py-1 rounded text-slate-300">Aug 2021 – Jun 2023</span>
                                </div>
                                <div className="text-sm text-slate-400 mb-4 font-mono">Kerala, India</div>
                                <ul className="space-y-2 text-slate-300 list-disc list-inside marker:text-amber-500">
                                    <li>Developed IoT control system with NodeMCU and Python for 5+ smart devices.</li>
                                    <li>Developed control code for a multi-DOF robotic arm with 0.5 mm precision.</li>
                                </ul>
                            </Card>
                        </div>
                    </div>

                    {/* Torc Infotech */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <SiCheckmarx className="text-red-500 w-5 h-5" />
                        </div>
                        <div className="w-full md:w-[calc(50%-2.5rem)] pl-8 md:pl-0 md:pr-14 md:group-even:pl-14">
                            <Card>
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Ethical Hacking Intern</h3>
                                        <div className="text-red-400 font-medium">Torc Infotech</div>
                                    </div>
                                    <span className="text-xs font-mono bg-slate-700 px-2 py-1 rounded text-slate-300">Nov 2019 – Dec 2019</span>
                                </div>
                                <div className="text-sm text-slate-400 mb-4 font-mono">Kerala, India</div>
                                <ul className="space-y-2 text-slate-300 list-disc list-inside marker:text-red-500">
                                    <li>Conducted malware and RAT analysis, identifying attack vectors.</li>
                                    <li>Applied machine learning for anomaly detection in network traffic.</li>
                                </ul>
                            </Card>
                        </div>
                    </div>

                </div>
            </Section>

            {/* Projects Section */}
            <Section title="Featured Projects" className="bg-slate-900/50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="h-full flex flex-col">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-white mb-2">MARVIS - Maritime Localisation</h3>
                            <div className="flex flex-wrap gap-2 mb-3">
                                <Badge text="ROS2 Jazzy" />
                                <Badge text="YOLOv5" />
                                <Badge text="ORB-SLAM3" />
                            </div>
                        </div>
                        <ul className="text-slate-400 space-y-2 flex-grow list-disc list-inside text-sm">
                            <li>Perception system with 67% mAP@0.5:0.95.</li>
                            <li>Satellite image analysis with DINOv3 (ViT), +18% accuracy.</li>
                            <li>Cross-view matching achieving 85% top-1 accuracy.</li>
                        </ul>
                    </Card>

                    <Card className="h-full flex flex-col">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-white mb-2">Autonomous Racing Perception</h3>
                            <div className="flex flex-wrap gap-2 mb-3">
                                <Badge text="Jetson Orin" />
                                <Badge text="ROS2 Foxy" />
                                <Badge text="27ms Latency" />
                            </div>
                        </div>
                        <ul className="text-slate-400 space-y-2 flex-grow list-disc list-inside text-sm">
                            <li>End-to-end latency of 27ms on Jetson AGX Orin.</li>
                            <li>Precision raised to 92% and mAP@50 to 86%.</li>
                            <li>Robust dataset for varied lighting and weather conditions.</li>
                        </ul>
                    </Card>

                    <Card className="h-full flex flex-col">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-white mb-2">KidSize Soccer Robots</h3>
                            <div className="flex flex-wrap gap-2 mb-3">
                                <Badge text="OpenVINO" />
                                <Badge text="INT8" />
                                <Badge text="30 FPS" />
                            </div>
                        </div>
                        <ul className="text-slate-400 space-y-2 flex-grow list-disc list-inside text-sm">
                            <li>Detected 6 classes with 96% mAP@0.5.</li>
                            <li>Model quantization to INT8 for 30 FPS on Intel hardware.</li>
                            <li>Dataset augmentation for motion blur simulation.</li>
                        </ul>
                    </Card>
                </div>
            </Section>

            {/* Education & Certs */}
            <Section title="Education & Certifications">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                            <FaGraduationCap className="text-blue-500" /> Education
                        </h3>
                        <Card>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-lg font-bold text-white">MSc in Artificial Intelligence and Robotics</h4>
                                    <p className="text-blue-400">University of Hertfordshire</p>
                                </div>
                                <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded text-sm border border-emerald-500/20">Distinction</span>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-lg font-bold text-white">B.Tech. in Computer Science and Engineering</h4>
                                    <p className="text-blue-400">APJ Abdul Kalam Technological University</p>
                                </div>
                                <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded text-sm border border-emerald-500/20">Distinction</span>
                            </div>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                            <FaBrain className="text-purple-500" /> Certifications & Service
                        </h3>
                        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                                    <div>
                                        <span className="text-white font-medium">Reviewer – IFAC World Congress</span>
                                        <span className="block text-sm text-slate-500">2026</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                                    <div>
                                        <span className="text-white font-medium">Microsoft – Azure AI Fundamentals</span>
                                        <span className="block text-sm text-slate-500">Jan 2025</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                                    <div>
                                        <span className="text-white font-medium">NVIDIA – Applications of AI for Predictive Maintenance</span>
                                        <span className="block text-sm text-slate-500">Dec 2024</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            <footer className="py-8 text-center text-slate-600 bg-slate-950 border-t border-slate-900">
                <p>© {new Date().getFullYear()} Athul Krishna Renjith. Built with React & Tailwind CSS.</p>
            </footer>
        </div>
    );
};

export default Landing;