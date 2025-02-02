import { DM_Serif_Display } from "next/font/google";
import { useRouter } from "next/router";

const dmSerif = DM_Serif_Display({
    subsets: ['latin'], // Specify the subsets if necessary
    weight: '400', // Explicitly set the weight to 400
});
export default function Country() {
    const router = useRouter();

    return (
        <div>
            <section>
                <div className="h-screen grid md:grid-cols-2">

                    <div style={{
                        backgroundImage: "url(/country.avif)",  // Reference image directly from the public folder
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "100%",
                    }}>
                        <h1 onClick={() => router.push("/")} className={`${dmSerif.className} text-white p-5 text-3xl text-center cursor-pointer`}>
                            GCCresumebuilder
                        </h1>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="p-10">
                            <h2 className={`${dmSerif.className} text-primary p-5 text-3xl text-center`}> Where are you focusing your job search? </h2>
                            <p className="text-center">We'll recommend the right templates for your target country.</p>

                            <div>
                                <p className="pt-20 pb-3">Select a Country</p>
                                <select
                                    className="w-full p-3 border-fuchsia-700 border rounded-xl"
                                    id="country"
                                >
                                    <option value="uae">United Arab Emirates</option>
                                    <option value="saudi">Saudi Arabia</option>
                                    <option value="qatar">Qatar</option>
                                    <option value="kuwait">Kuwait</option>
                                    <option value="bahrain">Bahrain</option>
                                    <option value="oman">Oman</option>
                                </select>
                                <button className="w-full mt-10 flex items-center justify-center p-3 border border-[#520eb3] rounded-xl font-extrabold text-primary">
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}