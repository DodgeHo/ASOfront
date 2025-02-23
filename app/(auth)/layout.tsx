import GeneralPageIllustration from "@/components/general-page-illustration";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex grow flex-col">
      <GeneralPageIllustration />

      {children}
    </main>
  );
}
