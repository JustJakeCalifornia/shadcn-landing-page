import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white p-8 md:p-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-5xl font-bold mb-16">Privacy Policy</h1>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">Wer wir sind</h2>
          <p className="text-lg leading-relaxed">
            Die Adresse unserer Website ist: https://gaplabs.de.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">Kommentare</h2>
          <p className="text-lg leading-relaxed">
            Wenn Besucher Kommentare auf der Website schreiben, sammeln wir die
            Daten, die im Kommentar-Formular angezeigt werden, außerdem die
            IP-Adresse des Besuchers und den User-Agent-String (damit wird der
            Browser identifiziert), um die Erkennung von Spam zu unterstützen.
          </p>
          <p className="text-lg leading-relaxed">
            Aus deiner E-Mail-Adresse kann eine anonymisierte Zeichenfolge
            erstellt (auch Hash genannt) und dem Gravatar-Dienst übergeben
            werden, um zu prüfen, ob du diesen benutzt. Die Datenschutzerklärung
            des Gravatar-Dienstes findest du hier:
            https://automattic.com/privacy/. Nachdem dein Kommentar freigegeben
            wurde, ist dein Profilbild öffentlich im Kontext deines Kommentars
            sichtbar.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">Medien</h2>
          <p className="text-lg leading-relaxed">
            Wenn du ein registrierter Benutzer bist und Fotos auf diese Website
            lädst, solltest du vermeiden, Fotos mit einem EXIF-GPS-Standort
            hochzuladen. Besucher dieser Website könnten Fotos, die auf dieser
            Website gespeichert sind, herunterladen und deren
            Standort-Informationen extrahieren.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">Cookies</h2>
          <p className="text-lg leading-relaxed">
            Wenn du einen Kommentar auf unserer Website schreibst, kann das eine
            Einwilligung sein, deinen Namen, E-Mail-Adresse und Website in
            Cookies zu speichern. Dies ist eine Komfortfunktion, damit du nicht,
            wenn du einen weiteren Kommentar schreibst, all diese Daten erneut
            eingeben musst. Diese Cookies werden ein Jahr lang gespeichert.
          </p>
          <p className="text-lg leading-relaxed">
            Falls du ein Konto hast und dich auf dieser Website anmeldest,
            werden wir ein temporäres Cookie setzen, um festzustellen, ob dein
            Browser Cookies akzeptiert. Dieses Cookie enthält keine
            personenbezogenen Daten und wird verworfen, wenn du deinen Browser
            schließt.
          </p>
          <p className="text-lg leading-relaxed">
            Wenn du dich anmeldest, werden wir einige Cookies einrichten, um
            deine Anmeldeinformationen und Anzeigeoptionen zu speichern.
            Anmelde-Cookies verfallen nach zwei Tagen und Cookies für die
            Anzeigeoptionen nach einem Jahr. Falls du bei der Anmeldung
            „Angemeldet bleiben“ auswählst, wird deine Anmeldung zwei Wochen
            lang aufrechterhalten. Mit der Abmeldung aus deinem Konto werden die
            Anmelde-Cookies gelöscht.
          </p>
          <p className="text-lg leading-relaxed">
            Wenn du einen Artikel bearbeitest oder veröffentlichst, wird ein
            zusätzlicher Cookie in deinem Browser gespeichert. Dieser Cookie
            enthält keine personenbezogenen Daten und verweist nur auf die
            Beitrags-ID des Artikels, den du gerade bearbeitet hast. Der Cookie
            verfällt nach einem Tag.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            Eingebettete Inhalte von anderen Websites
          </h2>
          <p className="text-lg leading-relaxed">
            Beiträge auf dieser Website können eingebettete Inhalte beinhalten
            (z. B. Videos, Bilder, Beiträge etc.). Eingebettete Inhalte von
            anderen Websites verhalten sich exakt so, als ob der Besucher die
            andere Website besucht hätte.
          </p>
          <p className="text-lg leading-relaxed">
            Diese Websites können Daten über dich sammeln, Cookies benutzen,
            zusätzliche Tracking-Dienste von Dritten einbetten und deine
            Interaktion mit diesem eingebetteten Inhalt aufzeichnen, inklusive
            deiner Interaktion mit dem eingebetteten Inhalt, falls du ein Konto
            hast und auf dieser Website angemeldet bist.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            Mit wem wir deine Daten teilen
          </h2>
          <p className="text-lg leading-relaxed">
            Wenn du eine Zurücksetzung des Passworts beantragst, wird deine
            IP-Adresse in der E-Mail zur Zurücksetzung enthalten sein.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            Wie lange wir deine Daten speichern
          </h2>
          <p className="text-lg leading-relaxed">
            Für Benutzer, die sich auf unserer Website registrieren, speichern
            wir zusätzlich die persönlichen Informationen, die sie in ihren
            Benutzerprofilen angeben. Alle Benutzer können jederzeit ihre
            persönlichen Informationen einsehen, verändern oder löschen (der
            Benutzername kann nicht verändert werden). Administratoren der
            Website können diese Informationen ebenfalls einsehen und verändern.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            Welche Rechte du an deinen Daten hast
          </h2>
          <p className="text-lg leading-relaxed">
            Wenn du ein Konto auf dieser Website besitzt oder Kommentare
            geschrieben hast, kannst du einen Export deiner personenbezogenen
            Daten bei uns anfordern, inklusive aller Daten, die du uns
            mitgeteilt hast. Darüber hinaus kannst du die Löschung aller
            personenbezogenen Daten, die wir von dir gespeichert haben,
            anfordern. Dies umfasst nicht die Daten, die wir aufgrund
            administrativer, rechtlicher oder sicherheitsrelevanter
            Notwendigkeiten aufbewahren müssen.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            Wohin wir deine Daten senden
          </h2>
          <p className="text-lg leading-relaxed">
            Besucher-Kommentare könnten von einem automatisierten Dienst zur
            Spam-Erkennung untersucht werden.
          </p>
        </section>
      </div>
    </div>
  );
}
