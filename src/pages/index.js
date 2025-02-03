import Carousel from "@/ui/carousel";
import { DM_Serif_Display } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";

// Importing the DM Serif Display font with the weight set to 400
const dmSerif = DM_Serif_Display({
    subsets: ['latin'], // Specify the subsets if necessary
    weight: '400', // Explicitly set the weight to 400
});

export default function Home() {
    const router = useRouter();

    return (
        <div>
            <header className="bg-primary">
                {/* Apply the font class to the h1 */}
                <h1 className={`${dmSerif.className} text-white p-5 text-3xl`}>
                    GCCresumebuilder
                </h1>
            </header>

            <main>
                <section className="banner-background">
                    <div className="grid md:grid-cols-2 text-white">
                        <div className="flex justify-center items-center">
                            <div>
                                <h1 className={`${dmSerif.className} text-white p-5 text-5xl`}>
                                    Build tailored resumes <br />
                                    for GCC
                                </h1>
                                <p className="p-5">
                                    Only 2% of resumes win. Yours will be one of them. Let's build you a resume that works.
                                </p>
                                <button onClick={() => router.push("/login")} className="bg-white text-primary m-5 p-3 rounded-2xl font-bold">
                                    Create My resume
                                </button>
                                <div className="flex gap-5 p-5 relative">
                                    {/* First Section */}
                                    <div className="relative flex items-center gap-5">
                                        {/* Line Before */}
                                        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-300 rounded-lg"></div>
                                        <div className="pl-5">
                                            <h5 className={`${dmSerif.className} bg-white text-primary text-2xl rounded-lg p-2 w-16`}>
                                                39%
                                            </h5>
                                            <p>more likely to get hired</p>
                                        </div>
                                    </div>

                                    {/* Second Section */}
                                    <div className="relative flex items-center gap-5">
                                        {/* Line Before */}
                                        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-300 rounded-lg"></div>
                                        <div className="pl-5">
                                            <h5 className={`${dmSerif.className} bg-white text-primary text-2xl rounded-lg p-2 w-16`}>
                                                08%
                                            </h5>
                                            <p>better pay with your next job</p>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>

                        <div>
                            <Image
                                src="/banner.avif"
                                alt="Next.js logo"
                                width={500}
                                height={38}
                                priority
                            />
                        </div>
                    </div>
                </section>

                <section className="md:p-24">
                    <div>
                        <h3 className={`${dmSerif.className} text-primary text-center text-2xl p-5 md:text-5xl`}>
                            The best resume maker for middle east jobs
                        </h3>

                        <p className="text-center m-10">
                            Our Customers have been hired at :
                        </p>
                        <div className="flex justify-center items-center m-10">
                            <Image
                                src="/ourcustomer.svg"
                                alt="Next.js logo"
                                width={1000}
                                height={100}
                                priority
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-primary">
                    <div className="text-center py-32">
                        <div className="flex justify-center items-center">
                            <Image
                                src="https://framerusercontent.com/images/a3IV8fa0uNJs6UeWGQTs3VrrD6U.svg"
                                alt="Next.js logo"
                                width={100}
                                height={2}
                                priority
                            />
                        </div>


                        <h1 className="text-white font-extrabold text-5xl">
                            Proven resume <br />
                            templates
                        </h1>

                        <p className="text-lg" style={{ color: "rgb(130, 139, 162)" }}>
                            These resume templates are here because <br />
                            they work. Every one is tried and tested on  <br />
                            real hiring managers
                        </p>
                    </div>
                </section>

                <Carousel />

                <section className="container mx-auto">
                    <div>
                        <h4 className="font-extrabold  md:text-5xl text-center">Get hired fast with a powerful resume</h4>
                        <div className="grid  md:grid-cols-3">
                            <div className="flex mt-20">
                                <div >
                                    <svg width="4rem" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="rgb(102, 102, 255)" ><path d="M12 4v4M4 8l2.5 2.5M17.5 10.5L20 8M3 17h3M12 17l1-6M18 17h3M8.5 20.001H4A9.956 9.956 0 012 14C2 8.477 6.477 4 12 4s10 4.477 10 10c0 2.252-.744 4.33-2 6.001L15.5 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 23a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>

                                <div>
                                    <h3 className="text-primary font-extrabold text-2xl p-2">A better resume in minutes</h3>
                                    <p className="p-2 pt-0">Replace your old resume in a few simple clicks.
                                        Our builder gives recruiters what they want.</p>
                                </div>
                            </div>


                            <div className="flex mt-20">
                                <div >
                                    <svg width="4rem" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="rgb(102, 102, 255)" ><path d="M12 4v4M4 8l2.5 2.5M17.5 10.5L20 8M3 17h3M12 17l1-6M18 17h3M8.5 20.001H4A9.956 9.956 0 012 14C2 8.477 6.477 4 12 4s10 4.477 10 10c0 2.252-.744 4.33-2 6.001L15.5 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 23a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>

                                <div>
                                    <h3 className="text-primary font-extrabold text-2xl p-2">ATS-friendly templates</h3>
                                    <p className="p-2 pt-0"> Tick every box and make sure your resume is never filtered out by the hiring software.</p>
                                </div>
                            </div>


                            <div className="flex mt-20">
                                <div >
                                    <svg width="4rem" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="rgb(102, 102, 255)" ><path d="M12 4v4M4 8l2.5 2.5M17.5 10.5L20 8M3 17h3M12 17l1-6M18 17h3M8.5 20.001H4A9.956 9.956 0 012 14C2 8.477 6.477 4 12 4s10 4.477 10 10c0 2.252-.744 4.33-2 6.001L15.5 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 23a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>

                                <div>
                                    <h3 className="text-primary font-extrabold text-2xl p-2">Pre-written content</h3>
                                    <p className="p-2 pt-0">Stop worrying about words. Save time by adding pre-approved, tested content from certified writers.</p>
                                </div>
                            </div>


                            <div className="flex mt-20">
                                <div >
                                    <svg width="4rem" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="rgb(102, 102, 255)" ><path d="M12 4v4M4 8l2.5 2.5M17.5 10.5L20 8M3 17h3M12 17l1-6M18 17h3M8.5 20.001H4A9.956 9.956 0 012 14C2 8.477 6.477 4 12 4s10 4.477 10 10c0 2.252-.744 4.33-2 6.001L15.5 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 23a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>

                                <div>
                                    <h3 className="text-primary font-extrabold text-2xl p-2">Easy with AI</h3>
                                    <p className="p-2 pt-0">Quickly generate formal phrases and summaries. Sound professional, faster.</p>
                                </div>
                            </div>


                            <div className="flex mt-20">
                                <div >
                                    <svg width="4rem" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="rgb(102, 102, 255)" ><path d="M12 4v4M4 8l2.5 2.5M17.5 10.5L20 8M3 17h3M12 17l1-6M18 17h3M8.5 20.001H4A9.956 9.956 0 012 14C2 8.477 6.477 4 12 4s10 4.477 10 10c0 2.252-.744 4.33-2 6.001L15.5 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 23a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>

                                <div>
                                    <h3 className="text-primary font-extrabold text-2xl p-2">Beat the competition</h3>
                                    <p className="p-2 pt-0">Our tested resume templates are designed to make you more attractive to recruiters.</p>
                                </div>
                            </div>

                            <div className="flex mt-20">
                                <div >
                                    <svg width="4rem" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="rgb(102, 102, 255)" ><path d="M12 4v4M4 8l2.5 2.5M17.5 10.5L20 8M3 17h3M12 17l1-6M18 17h3M8.5 20.001H4A9.956 9.956 0 012 14C2 8.477 6.477 4 12 4s10 4.477 10 10c0 2.252-.744 4.33-2 6.001L15.5 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 23a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>

                                <div>
                                    <h3 className="text-primary font-extrabold text-2xl p-2">Get paid more</h3>
                                    <p className="p-2 pt-0">A higher salary begins with a strong resume. Our salary analyzer tells you if your job offer is competitive (or not).</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="container mx-auto text-center py-32">
                    <div>
                        <h5 className="font-[700] text-[72px]" style={{ color: "rgb(26, 145, 240)" }}>Join over  44,071,000 users worldwide</h5>
                        <p>Start for free -- try our resume builder now</p>
                        <button className="text-white p-5 font-bold rounded" style={{ backgroundColor: "rgb(26, 145, 240)" }}> Create my resume</button>
                    </div>
                </section>

                <section className="text-white py-32 bg-[#282b8f]">
                    <div className="container mx-auto ">
                        <div className="grid md:grid-cols-2">
                            <div>
                                <h3 className="font-[700] text-[46px] text-start leading-[48px]">Beautiful ready-to-use resume templates</h3>
                                <p className="text-start py-3" >Win over employers and recruiters by using one of our 25+ elegant, professionally-designed resume templates. Download to word or PDF.</p>
                                <button className="text-white p-5 font-bold rounded" style={{ backgroundColor: "rgb(26, 145, 240)" }}> Select template</button>

                            </div>

                            <div>

                            </div>

                        </div>
                    </div>
                </section>


            </main>

            <footer className="text-white bg-[#0f141e]">
                <div className="text-center p-10 font-bold text-4xl">
                    Create a resume
                </div>
                <div className="container mx-auto grid md:grid-cols-5">
                    <div>
                        Connect with us on Social Media

                    </div>

                    <div>
                        <h4 className="text-sm font-bold pb-3" style={{ color: "rgb(48, 56, 72)" }}>JOB SEEKERS</h4>
                        <ul>
                            <li className="py-1">Create a resume</li>
                            <li className="py-1">Resume examples</li>
                            <li className="py-1">Resume templates</li>
                            <li className="py-1">Cover Letter Templates</li>
                            <li className="py-1">Job Search</li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-sm font-bold pb-3" style={{ color: "rgb(48, 56, 72)" }}>CAREER RESOURCES</h4>
                        <ul>
                            <li className="py-1">Resume Help</li>
                            <li className="py-1">Job Interview</li>
                            <li className="py-1">Career</li>
                            <li className="py-1">Cover Letter</li>
                            <li className="py-1">Blog</li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-sm font-bold pb-3" style={{ color: "rgb(48, 56, 72)" }}>OUR COMPANY</h4>
                        <ul>
                            <li className="py-1">About Us</li>
                            <li className="py-1">Pricing</li>
                            <li className="py-1">Sponsorship Program</li>
                            <li className="py-1">Media Kit</li>
                            <li className="py-1">Affiliates</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold pb-3" style={{ color: "rgb(48, 56, 72)" }}>SUPPORT</h4>
                        <ul>
                            <li className="py-1">FAQ</li>
                            <li className="py-1">Contact Us</li>
                            <li className="py-1">Terms of Service</li>
                            <li className="py-1">Privacy</li>
                            <li className="py-1">Affiliates</li>
                        </ul>
                    </div>

                </div>
            </footer>
        </div>
    );
}
