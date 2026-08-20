import SignupForm from "../_component/page/signup/SignupForm"

export default function SignupPage() {
    return (
        <main className="relative flex flex-1 items-center overflow-hidden bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-primary/[0.03] lg:block" />
            <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[440px_1fr] lg:gap-20">
                <SignupForm />

                <section className="hidden max-w-xl lg:block">
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        The road is yours
                    </p>
                    <h1 className="max-w-lg text-5xl font-semibold leading-[1.05] tracking-tight text-foreground">
                        More freedom in every mile.
                    </h1>
                    <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">
                        Create your Apollo Gears account and discover a simpler way to find, book, and enjoy your next car.
                    </p>
                    <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
                        <div>
                            <p className="text-2xl font-semibold text-foreground">5k+</p>
                            <p className="mt-1 text-sm text-muted-foreground">Drivers</p>
                        </div>
                        <div>
                            <p className="text-2xl font-semibold text-foreground">24/7</p>
                            <p className="mt-1 text-sm text-muted-foreground">Support</p>
                        </div>
                        <div>
                            <p className="text-2xl font-semibold text-foreground">4.9/5</p>
                            <p className="mt-1 text-sm text-muted-foreground">Rated</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
