import Layout from "../components/layout";

export default function BootcampOfficeHours() {
    return (
        <Layout>
            <section className="col-span-3 bg-primary p-6 text-white rounded-lg shadow-md">
                <h1 className="text-4xl font-sans font-bold">
                    Book Your Bootcamp Office Hours
                </h1>
                <p className="mt-4 text-lg font-sans">
                    Reserve a one-on-one session and relieve some stress.
                </p>
                <button
                    onClick={""}
                    className="mt-6 bg-accent hover:bg-accent-light text-black font-bold py-2 px-4 rounded"
                >
                    Reserve Now
                </button>
            </section>
        </Layout>
    );
}
