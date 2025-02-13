import { Separator } from "@/components/ui/separator";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white p-8 md:p-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-5xl font-bold mb-16">Terms of Service</h1>

        <Separator />
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Last updated: February 10, 2025
          </p>
          <p className="text-base leading-relaxed">
            These Terms of Service (&quot;Terms&quot;) constitute a binding
            agreement between GapLabs GmbH (&quot;GapLabs,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) and any municipality or business
            (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) that
            registers for or uses our subscription-based software product
            (&quot;GonzoCity&quot;). By accessing or using GonzoCity—whether
            through our website-based control panel or our mobile app—you agree
            to be bound by these Terms. If you do not agree with these Terms,
            please do not use GonzoCity.
          </p>
        </div>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">1. Company Information</h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
            <li>
              <strong>Legal Name:</strong> GapLabs GmbH
            </li>
            <li>
              <strong>Jurisdiction:</strong> Germany
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            2. Description of GonzoCity
          </h2>
          <p className="leading-relaxed ml-2">
            GapLabs provides subscription-based software designed for
            municipalities and businesses. GonzoCity are accessible through a
            website-based control panel and a mobile app. In order to use
            GonzoCity, Users must create an account and provide certain general
            informations, and location data, which is essential for our core
            business functionality.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            3. User Accounts and Registration
          </h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
            <li>
              <strong>Account Creation:</strong> Access to GonzoCity is
              available only to municipalities and businesses that register and
              create an account with us.
            </li>
            <li>
              <strong>Data Collection:</strong> During registration, we collect
              general information. Additionally, GonzoCity require access to
              your location data as a fundamental part of the product offering.
            </li>
            <li>
              <strong>User Responsibilities:</strong> Users are expected to
              provide accurate and current information and to use GonzoCity in a
              lawful and responsible manner. While we do not impose overly
              specific behavioral requirements, you agree to comply with these
              general obligations.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            4. Subscription, Payment, and Refund Policy
          </h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
            <li>
              <strong>Subscription Model:</strong> GonzoCity is offered on a
              subscription basis.
            </li>
            <li>
              <strong>Payment Options:</strong> We accept a wide range of
              payment methods. The most common payment option is wire transfer.
            </li>
            <li>
              <strong>Free Trial:</strong> We offer a 14-day free trial period.
            </li>
            <li>
              <strong>No Refunds:</strong> All subscription payments are final.
              We do not offer refunds for any subscription fees once the payment
              has been processed.
            </li>
            <li>
              <strong>Cancelation:</strong> You may cancel your subscription at
              any time; however, no refunds will be provided for any
              subscription fees already charged.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            5. Intellectual Property and User Content
          </h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
            <li>
              <strong>Ownership of Data:</strong>
              <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
                <li>
                  <strong>Company Data:</strong> All data generated by GapLabs
                  remains the property of GapLabs.
                </li>
                <li>
                  <strong>User Data:</strong> Data provided or generated by
                  Users is owned by GapLabs. However, Users are entitled to
                  export or claim their data as provided through GonzoCity.
                </li>
              </ul>
            </li>
            <li>
              <strong>User-Generated Content:</strong> GonzoCity allow Users to
              interact with their own company data (for example, by adding new
              orders or other information). Such interactions are governed by
              these Terms.
            </li>
            <li>
              <strong>Third-Party Intellectual Property:</strong> GonzoCity do
              not incorporate a mechanism for handling copyright or DMCA claims.
              Users are responsible for ensuring that their use of GonzoCity
              does not infringe on the rights of others.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            6. Acceptable Use and Prohibited Activities
          </h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
            <li>
              <strong>Acceptable Use:</strong> Users agree to use GonzoCity only
              for lawful purposes and in accordance with these Terms.
            </li>
            <li>
              <strong>Prohibited Activities:</strong>
              <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
                <li>
                  Users shall not engage in activities that attempt to
                  circumvent or defraud the subscription payment system.
                </li>
                <li>
                  Users must refrain from any activity that disrupts or
                  interferes with GonzoCity or the experience of other Users.
                </li>
                <li>
                  Any other activity deemed by GapLabs to be harmful,
                  fraudulent, or abusive is strictly prohibited.
                </li>
              </ul>
            </li>
            <li>
              <strong>Enforcement:</strong> Violation of these acceptable use
              policies may result in warnings, suspension, or termination of
              your account, at our sole discretion.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            7. Disclaimers, Warranties, and Limitation of Liability
          </h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
            <li>
              <strong>Service Accuracy and Availability:</strong> While we
              strive to provide an accurate and reliable experience, GapLabs
              does not guarantee uninterrupted or error-free access.
            </li>
            <li>
              <strong>Warranties:</strong>
              <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
                <li>
                  GapLabs provides GonzoCity &quot;as is&quot; and &quot;as
                  available.&quot;
                </li>
                <li>
                  We make no express warranties regarding GonzoCity, and all
                  warranties, whether express or implied, are disclaimed to the
                  fullest extent permitted by law.
                </li>
              </ul>
            </li>
            <li>
              <strong>Limitation of Liability:</strong>
              <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
                <li>
                  In no event shall GapLabs be liable for any indirect,
                  incidental, special, consequential, or punitive damages
                  arising out of or in connection with your use of GonzoCity.
                </li>
                <li>
                  Our total liability, whether in contract, tort, or otherwise,
                  shall be limited to the amount paid by you for the
                  subscription in question.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            8. Termination and Suspension
          </h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
            <li>
              <strong>Termination by GapLabs:</strong> We reserve the right to
              suspend or terminate your account if you fail to pay your
              subscription fee or if you otherwise breach these Terms.
            </li>
            <li>
              <strong>User Termination:</strong> Users may choose to delete
              their account at any time. Please note that deleting your account
              will result in the irrevocable deletion of all associated data.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            9. Dispute Resolution and Governing Law
          </h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
            <li>
              <strong>Dispute Resolution:</strong> Any disputes arising out of
              or related to these Terms shall be resolved through general
              dispute resolution mechanisms, which may include negotiation,
              mediation, or, if necessary, legal proceedings.
            </li>
            <li>
              <strong>Governing Law and Jurisdiction:</strong>
              <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
                <li>
                  These Terms shall be governed by and construed in accordance
                  with the laws of Germany.
                </li>
                <li>
                  Any legal action or proceeding arising out of or relating to
                  these Terms shall be brought exclusively in the courts located
                  in Germany.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            10. Modifications to the Terms
          </h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
            <li>
              <strong>Updates:</strong> GapLabs may update these Terms from time
              to time. It is your responsibility to regularly review the Terms
              by visiting our website.
            </li>
            <li>
              <strong>Continued Use:</strong> Your continued use of GonzoCity
              after any modifications to the Terms constitutes your acceptance
              of the revised Terms.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            11. Indemnification and Force Majeure
          </h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
            <li>
              <strong>Indemnification:</strong> You agree to indemnify, defend,
              and hold harmless GapLabs and its affiliates from and against any
              claims, damages, liabilities, costs, or expenses arising from your
              use of GonzoCity or your breach of these Terms.
            </li>
            <li>
              <strong>Force Majeure:</strong> GapLabs shall not be liable for
              any failure to perform its obligations under these Terms if such
              failure is due to circumstances beyond its reasonable control,
              including, but not limited to, acts of God, war, or other force
              majeure events.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            12. Integration with Other Policies
          </h2>
          <p className="leading-relaxed ml-2">
            Our Terms of Service are integrated with and form a part of our
            broader set of policies, including but not limited to our Privacy
            Policy. By using GonzoCity, you acknowledge and agree to be bound by
            these policies as well.
          </p>
        </section>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">13. Contact Information</h2>
          <p className="leading-relaxed ml-2">
            If you have any questions about these Terms, please contact us at:
          </p>
          <ul className="list-outside ml-2">
            <li>
              <strong>GapLabs GmbH</strong>
            </li>
            <li>Mühlenstraße 21</li>
            <li>26419 Schortens</li>
            <li>Germany</li>
            <br />
            <li>
              <strong>Email:</strong>info@gaplabs.de
            </li>
            <li>
              <strong>Phone:</strong>+49 17655044671
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
