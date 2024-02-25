import Layout from "../components/layout";

export default function BootcampOfficeHours() {
    return (
        <Layout>
            {/* HEADLINE */}
            <section className="col-span-3 bg-primary p-6 text-white rounded-lg shadow-md">
                <h1 className="text-4xl font-sans font-bold">
                    Exclusive Office Hours for Bootcamp Students
                </h1>
                <p className="mt-4 text-lg font-sans">
                    Book a one-on-one session and relieve some stress.
                </p>
                <button
                    onClick={""}
                    className="mt-6 bg-accent hover:bg-accent-light text-black font-bold py-2 px-4 rounded"
                >
                    Reserve Now
                </button>
            </section>
            {/* HERO SECTION */}
            <section className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                {/* Benefit 1 */}
                <div className="bg-secondary text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="font-bold text-xl">
                        Personalized Attention
                    </h2>
                    <p className="text-sm mt-2">
                        Get focused time to discuss your projects and goals.
                    </p>
                </div>

                {/* Benefit 2 */}
                <div className="bg-secondary text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="font-bold text-xl">Expert Guidance</h2>
                    <p className="text-sm mt-2">
                        Learn from an experienced professional how to think through complex challenges.
                    </p>
                </div>

                {/* Benefit 3 */}
                <div className="bg-secondary text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="font-bold text-xl">Flexible Scheduling</h2>
                    <p className="text-sm mt-2">
                        Choose a time that fits your busy life and keeps you moving forward.
                    </p>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="flex flex-col items-center col-span-3 md:col-span-2 bg-neutral p-6 rounded-lg shadow-md my-6">
                <h2 className="text-2xl font-sans font-bold text-white">
                    How It Works
                </h2>
                <ol className="list-decimal list-inside space-y-4 mt-4">
                    <li className="flex items-center">
                        <span className="font-bold text-accent">Step 1:</span>
                        <p className="ml-2">
                            Choose the best time for your schedule via Calendly.
                        </p>
                    </li>
                    <li className="flex items-center">
                        <span className="font-bold text-accent">Step 2:</span>
                        <p className="ml-2">
                            Fill in the details so we can tailor the session just for you.
                        </p>
                    </li>
                    <li className="flex items-center">
                        <span className="font-bold text-accent">Step 3:</span>
                        <p className="ml-2">
                            Receive a confirmation with all you need to know for our session.
                        </p>
                    </li>
                </ol>
                <button
                    onClick={""}
                    className="mt-6 bg-accent hover:bg-accent-light text-black font-bold py-2 px-4 rounded"
                >
                    Book Now
                </button>
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
                    Frequently Asked Questions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* question */}
                    <div className="bg-primary p-4 rounded-lg shadow">
                        <h3 className="font-serif font-bold text-xl text-white">
                            What can I ask during office hours?
                        </h3>
                        <p className="text-neutral mt-2">
                            Anything that can help you progress in your learning journey – from specific coding challenges to career advice.
                        </p>
                    </div>
                    {/* question */}
                    <div className="bg-primary p-4 rounded-lg shadow">
                        <h3 className="font-serif font-bold text-xl text-white">
                            Can I just give you some code and you fix it for me?
                        </h3>
                        <p className="text-neutral mt-2">
                            I am not offering to write code for you. I want to help you understand why your code isn't working and guide you towards a solution.
                        </p>
                    </div>
                    {/* question */}
                    <div className="bg-primary p-4 rounded-lg shadow">
                        <h3 className="font-serif font-bold text-xl text-white">
                            I want to schedule more than one session. Is that okay?
                        </h3>
                        <p className="text-neutral mt-2">
                            I appreciate your trust. In the notes section of the Calendly form, please indicate that you are scheduling multiple sessions and, then, book the second session.
                        </p>
                    </div>

                    {/* Repeat for other questions */}
                </div>
            </section>
        </Layout>
    );
}
