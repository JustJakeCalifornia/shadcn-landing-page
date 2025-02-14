import { Separator } from "@/components/ui/separator";

export default function LegalNotice() {
  return (
    <div className="min-h-screen bg-background dark:bg-background text-gray-900 dark:text-white p-8 md:p-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-5xl font-bold mb-16">Legal Notice</h1>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">Address</h2>
          <ul className="space-y-2 text-lg">
            <li>Marc Lütke</li>
            <li>Mühlenstraße 21</li>
            <li>26419 Schortens</li>
            <li>Germany</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <ul className="space-y-2 text-lg">
            <li>
              <a
                href="mailto:info@gaplabs.de"
                className="underline hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                info@gaplabs.de
              </a>
            </li>
            <li>+49 17655044671</li>
          </ul>
        </section>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">Disclaimer</h2>
          <p className="text-lg leading-relaxed">
            Even though we put a lot of effort into reviewing our content, we
            can't take responsibility for the content of external links. The
            operators of those linked sites are solely responsible for their
            content.
          </p>
        </section>
      </div>
    </div>
  );
}
