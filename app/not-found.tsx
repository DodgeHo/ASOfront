import Footer from "@/components/ui/footer";

export default function NotFound() {
  return (
    <>
      <main className="relative flex grow flex-col">
        <section>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="py-12 md:py-20">
              <div className="text-center">
                <div className="relative -mt-8">
                  <div className="animate-gradient-text pb-8 nacelle-text24 ">
                    Uh oh. That page doesn't exist.
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
