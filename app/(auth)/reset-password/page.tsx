export const metadata = {
  title: "Reset Password - Open PRO",
  description: "Page description",
};

import Link from "next/link";

export default function ResetPassword() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <div className="animate-gradient-text nacelle-text14 ">
              Reset your password
            </div>
          </div>
          {/* Contact form */}
          <form className="mx-auto max-w-[400px]">
            <div>
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
                placeholder="Your email"
              />
            </div>
            <div className="mt-6">
              <button className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
