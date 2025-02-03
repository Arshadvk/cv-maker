import Image from "next/image";

export default function Payment() {

    return (
        <div>
            <section style={{ backgroundColor: "rgb(255, 250, 242)" }} className="">
                <div className="container mx-auto">
                    <div>
                        <h2 className="text-center" style={{ color: "rgb(63, 63, 63)" }}>Why go premium?</h2>
                        <h3 className="text-center" style={{ color: "rgb(63, 63, 63)" }}>Join 70,455 happy customers.</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div className="flex justify-center items-center">
                            <div className="p-10">
                                <Image
                                    src="/payment/payment-1.avif"
                                    alt="Next.js logo"
                                    width={500}
                                    height={0}
                                    priority />

                                <Image
                                    src="/payment/premium.svg"
                                    alt="Next.js logo"
                                    width={70}
                                    height={0}
                                    priority />
                                <h4 style={{fontFamily : 'Roboto Serif' , fontWeight:500}} className="pb-2">40+ customizable resume templates</h4>
                                <p>Apart from the 4 free resume templates, you also get 33 fully customizable premium templates. All templates were designed by a team of experienced recruiters and professional typographers. ATS-friendly and positively stunning.</p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="p-10">
                                <Image
                                    src="/payment/payment-2.avif"
                                    alt="Next.js logo"
                                    width={500}
                                    height={100}
                                    priority />

                                <Image
                                    src="/payment/premium.svg"
                                    alt="Next.js logo"
                                    width={70}
                                    height={0}
                                    priority />
                                <h4 style={{fontFamily : 'Roboto Serif' , fontWeight:500}} className="pb-2">40+ customizable resume templates</h4>
                                <p>Apart from the 4 free resume templates, you also get 33 fully customizable premium templates. All templates were designed by a team of experienced recruiters and professional typographers. ATS-friendly and positively stunning.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}