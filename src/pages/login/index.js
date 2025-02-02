import { useRouter } from "next/router";

export default function Login() {
        const router = useRouter();
    
    return (
        <div>
            <div className="grid grid-cols-12 h-screen">
                {/* Left Column with Background Image */}
                <div className="col-span-12 md:col-span-8 flex justify-center items-center"
                    style={{
                        backgroundImage: "url(/login.avif)",  // Reference image directly from the public folder
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "100%",
                    }}
                >
                    <div className="text-center text-white">
                        <h4>Take the first step towards your</h4>
                        <h2>Dream Job</h2>
                    </div>
                </div>

                {/* Right Column with Login Form */}
                <div className="col-span-12 md:col-span-4 flex justify-center items-center text-center p-4">
                    <div className="w-full max-w-sm">
                        <h2 onClick={() => router.push("/")}  className="text-center text-primary">GCCresumebuilder</h2>
                        <h3 className="text-2xl">Create an account</h3>
                        <p className="text-center mb-4 font-thin">so we can save your work!</p>
                        <p className="flex items-center justify-center p-3 border rounded-xl">
                            <svg width="16" height="16" fill="blueviolet" className="bi bi-google">
                                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                            </svg>
                            <span className="pl-2">Sign in with Google</span>
                        </p>
                        <p className="text-center my-2">or</p>
                        <form>
                            <div className="mb-3">
                                <p className="text-start pl-2">Email Address</p>
                                <input
                                    type="email"
                                    className="w-full p-3 border border-fuchsia-700 rounded-xl"
                                    id="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-3">
                                <p className="text-start pl-2">Password</p>
                                <input
                                    type="password"
                                    className="w-full p-3 border-fuchsia-700 border rounded-xl"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <button type="submit" className="w-full bg-primary text-white p-3 border rounded-xl">Register</button>
                            <p className="text-primary mt-3">Already have an account?</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
