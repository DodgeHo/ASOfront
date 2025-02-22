export const metadata = {
  title: "Contact us - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/homepage/page-illustration";
import FooterSeparator from "@/components/footer-separator";

export default function Contact() {
  return (
    <>
      <PageIllustration multiple />
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="pb-12 text-center">
              <div className="animate-gradient-text pb-5 nacelle-text45">
                Contact us
              </div>
              <div className="mx-auto max-w-3xl">
                <p className="text-xl text-indigo-200/65">
                  We have custom plans to power your business. Tell us your
                  needs, and we'll contact you shortly.
                </p>
              </div>
            </div>
            {/* Contact form */}
            <form className="mx-auto max-w-[640px]">
              <div className="space-y-5">
                <div className="flex flex-col gap-x-6 gap-y-4 md:flex-row">
                  <div className="flex-1">
                    <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="first-name"
                    >
                      Name
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      className="form-input w-full"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="last-name"
                    >
                      Surname
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      className="form-input w-full"
                      placeholder="Your surname"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-x-6 gap-y-4 md:flex-row">
                  <div className="flex-1">
                    <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-input w-full"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="country"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      className="form-select w-full text-gray-200"
                      defaultValue={"default"}
                    >
                      <option value={"default"} disabled hidden>
                        Select a country
                      </option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Germany</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-x-6 gap-y-4 md:flex-row">
                  <div className="flex-1">
                    <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="topic"
                    >
                      Topic
                    </label>
                    <select
                      id="topic"
                      className="form-select w-full text-gray-200"
                      defaultValue={"default"}
                    >
                      <option value={"default"} disabled hidden>
                        Select a topic
                      </option>
                      <option>General</option>
                      <option>Business</option>
                      <option>Finance</option>
                      <option>Health</option>
                      <option>Legal</option>
                      <option>Marketing</option>
                      <option>Productivity</option>
                      <option>Security</option>
                      <option>Software</option>
                      <option>Travel</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="form-input w-full"
                      placeholder="Let us know how we can help"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="description"
                  >
                    Full description
                  </label>
                  <textarea
                    id="description"
                    rows={5}
                    className="form-textarea w-full text-gray-200"
                    placeholder="Include as much details as you can"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="mt-8 flex w-full flex-col justify-between gap-5 md:flex-row md:items-center">
                <p className="text-sm text-indigo-200/65">
                  By continuing, you agree to our{" "}
                  <a className="underline hover:no-underline" href="#0">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a className="underline hover:no-underline" href="#0">
                    Privacy policy
                  </a>
                </p>
                <div>
                  <button className="btn group w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]">
                    <span className="relative inline-flex items-center">
                      Send
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <FooterSeparator />
    </>
  );
}
