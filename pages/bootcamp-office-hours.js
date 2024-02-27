import Layout from "../components/layout";
import Head from "next/head";

import { offering } from "../content/bootcamp-office-hours";

export default function BootcampOfficeHours() {
    return (
        <Layout>
            <Head>
                <title>{offering.title}</title>
                <meta name="description" content={offering.metaDescription}></meta>
            </Head>
            {/* HEADLINE */}
            <section className="col-span-3 bg-primary p-6 text-white rounded-lg shadow-md">
                <h1 className="text-4xl font-sans font-bold">
                    {offering.heading}
                </h1>
                <p className="mt-4 text-lg font-sans">{offering.description}</p>
                <button
                    onClick={""}
                    className="mt-6 bg-accent hover:bg-accent-light text-black font-bold py-2 px-4 rounded"
                >
                    {offering.cta}
                </button>
            </section>
            {/* HERO SECTION */}
            <section className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                {offering.benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="bg-secondary text-white p-4 rounded-lg shadow-lg flex flex-col items-center"
                    >
                        <h2 className="font-bold text-xl">{benefit.title}</h2>
                        <p className="text-sm mt-2">{benefit.description}</p>
                    </div>
                ))}
            </section>

            {/* HOW IT WORKS */}
            <section className="flex flex-col items-center col-span-3 md:col-span-2 bg-neutral p-6 rounded-lg shadow-md my-6">
                <h2 className="text-2xl font-sans font-bold text-white">
                    {offering.offeringDetails.title}
                </h2>
                <ol className="space-y-4 mt-4">
                    {offering.offeringDetails.steps.map((step, index) => (
                        <li key={index}>
                            <span className="font-bold text-accent">
                                Step {index + 1}:
                            </span>
                            <p className="ml-2">{step}</p>
                        </li>
                    ))}
                </ol>
                <button
                    onClick={""}
                    className="mt-6 bg-accent hover:bg-accent-light text-black font-bold py-2 px-4 rounded"
                >
                    {offering.offeringDetails.cta}
                </button>
            </section>
            {/* VIDEO */}
            <section className="col-span-3 my-6">
                <iframe
                    className="rounded-lg shadow-md aspect-video w-full"
                    aspectRatio="16/9"
                    src={offering.video.url}
                    title={offering.video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>

            {/* CTA */}
            <section className="col-span-3 text-center my-6">
                <h2 className="text-3xl font-serif font-bold text-secondary mb-4">
                    Ready to Book Your Session?
                </h2>
                <button
                    onClick={""}
                    className="bg-accent hover:bg-accent-light text-black font-bold py-2 px-4 rounded-lg text-xl"
                >
                    Schedule Now
                </button>
            </section>

            {/* Fervently Anticipated Questions */}
            <section className="col-span-3 my-6">
                <h2 className="text-3xl font-serif font-bold text-secondary mb-4 text-center">
                    {offering.faq.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {offering.faq.questions.map((question, index) => (
                        <div
                            key={index}
                            className="bg-primary p-4 rounded-lg shadow"
                        >
                            <h3 className="font-serif font-bold text-xl text-white">
                                {question.question}
                            </h3>
                            <p className="text-neutral mt-2">
                                {question.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
}
