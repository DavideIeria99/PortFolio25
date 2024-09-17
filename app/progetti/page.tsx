import Card from "@/components/layout/card";

export default function page() {
    return (
        <main className="px-10">
            <h1 className="text-4xl font-bold uppercase">tutti i progetti</h1>
            <section className="my-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                <Card href="/progetti/laravel" />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </main>
    );
}
