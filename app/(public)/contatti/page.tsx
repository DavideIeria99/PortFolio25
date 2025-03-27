import FormContact from "./_components/form-contact";

export default function About() {
    return (
        <main>
            <section className="mx-auto w-full rounded-sm border-4 border-white bg-orange-300 py-10 shadow-md shadow-orange-200 md:w-1/2 ">
                <h1 className=" mb-4 text-center text-2xl font-medium uppercase text-white sm:text-3xl">
                    contatti
                </h1>
                <FormContact />
                {/* <SimpleContact /> */}
            </section>
        </main>
    );
}
