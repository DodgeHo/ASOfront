import Link from "next/link";
import Image from "next/image";
import NotFoundImage from "@/public/images/404.jpg";
import PageIllustration from "@/components/page-illustration";
import FooterSeparator from "@/components/footer-separator";
import Footer from "@/components/ui/footer";

export default function NotFound() {
  return (
    <>
      <main className="relative flex grow flex-col">
        <PageIllustration multiple />
        <section>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="py-12 md:py-20">
              <div className="text-center">
                <Image
                  className="mx-auto rotate-2 rounded-2xl"
                  src={NotFoundImage}
                  width={196}
                  height={196}
                  alt="A funny dog with a strange expression on his face"
                />
                <div className="relative -mt-8">
                  <div className="animate-gradient-text pb-8 nacelle-text14 ">
                    Uh oh. That page doesn't exist.
                  </div>
                  <Link
                    className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                    href="/"
                  >
                    Back Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterSeparator />
      </main>
      <Footer />
    </>
  );
}
