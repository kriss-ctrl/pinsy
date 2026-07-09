import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

interface Badge {
  id: string;
  short: string;
  name: string;
}

interface BadgeCategory {
  title: string;
  color: string;
  textColor: string;
  borderColor: string;
  bgLight: string;
  badges: Badge[];
}

const categories: BadgeCategory[] = [
  {
    title: "Audyt i Finanse",
    color: "#2563eb",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    bgLight: "bg-blue-50",
    badges: [
      { id: "ap", short: "AP", name: "Audytor Podatkowy" },
      { id: "aw", short: "AW", name: "Audytor Wewnętrzny" },
      { id: "kf", short: "KF", name: "Kontroler Finansowy" },
      { id: "kw", short: "KW", name: "Kontroler Wewnętrzny" },
      { id: "kkz", short: "KKZ", name: "Koordynator Kontroli Zarządczej" },
      { id: "ezp", short: "EZP", name: "Ekspert Zarządzania Procesowego" },
    ],
  },
  {
    title: "Technologia i Innowacje",
    color: "#0d9488",
    textColor: "text-teal-600",
    borderColor: "border-teal-200",
    bgLight: "bg-teal-50",
    badges: [
      { id: "asi", short: "ASI", name: "Audytor Systemów Informatycznych" },
      { id: "atc", short: "ATC", name: "Audytor Tożsamości Cyfrowej" },
      { id: "bsp", short: "BSP", name: "Ekspert ds. Bezzałogowych Statków Powietrznych" },
      { id: "bcm", short: "BCM", name: "Menedżer Technologii Blockchain" },
    ],
  },
  {
    title: "Compliance i Prawo",
    color: "#7c3aed",
    textColor: "text-violet-600",
    borderColor: "border-violet-200",
    bgLight: "bg-violet-50",
    badges: [
      { id: "cco", short: "CCO", name: "Chief Compliance Officer" },
      { id: "cm", short: "CM", name: "Compliance Manager" },
      { id: "aml", short: "AML", name: "Ekspert AML/CFT" },
      { id: "rodo", short: "RODO", name: "Inspektor Ochrony Danych (RODO)" },
      { id: "whistle", short: "WHISTLE", name: "Menedżer Systemu Zgłaszania Nieprawidłowości" },
    ],
  },
  {
    title: "Ryzyko i Bezpieczeństwo",
    color: "#dc2626",
    textColor: "text-red-600",
    borderColor: "border-red-200",
    bgLight: "bg-red-50",
    badges: [
      { id: "rm", short: "RM", name: "Risk Manager" },
      { id: "sbi", short: "SBI", name: "Specjalista ds. Bezpieczeństwa Informacji" },
      { id: "cyber", short: "CYBER", name: "Specjalista ds. Cyberbezpieczeństwa" },
      { id: "bik", short: "BIK", name: "Koordynator Bezpieczeństwa Infrastruktury Krytycznej" },
    ],
  },
  {
    title: "Śledztwa i Wywiad",
    color: "#ea580c",
    textColor: "text-orange-600",
    borderColor: "border-orange-200",
    bgLight: "bg-orange-50",
    badges: [
      { id: "as", short: "AS", name: "Audytor Śledczy" },
      { id: "bzk", short: "BZK", name: "Biegły ds. Zapobiegania i Wykrywania Przestępstw" },
      { id: "wgi", short: "WGI", name: "Specjalista ds. Wywiadu Gospodarczego" },
      { id: "pgp", short: "PGP", name: "Specjalista ds. Zapobiegania i Wykrywania Przestępstw" },
    ],
  },
  {
    title: "Specjalistyczne",
    color: "#059669",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    bgLight: "bg-emerald-50",
    badges: [
      { id: "scf", short: "SCF", name: "Specjalista Controllingu Finansowego" },
      { id: "pib", short: "PIB", name: "Ekspert ds. Procesu Inwestycji Budowlanych" },
    ],
  },
];

function BadgeCard({ badge }: { badge: Badge }) {
  return (
    <div className="group flex flex-col items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-center">
        <img
          src={`/badges/badge-${badge.id}.svg`}
          alt={`${badge.short} — ${badge.name}`}
          className="h-32 w-32 object-contain transition-transform duration-200 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="text-center">
        <span className="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-bold tracking-wider text-gray-500">
          {badge.short}
        </span>
        <p className="mt-1 text-sm font-medium text-gray-800">{badge.name}</p>
      </div>
    </div>
  );
}

function BadgeCategorySection({ category }: { category: BadgeCategory }) {
  return (
    <section>
      <div className={`mb-6 inline-block rounded-full ${category.bgLight} px-5 py-2`}>
        <h2 className={`text-lg font-semibold ${category.textColor}`}>{category.title}</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {category.badges.map((badge) => (
          <BadgeCard key={badge.id} badge={badge} />
        ))}
      </div>
    </section>
  );
}

function Home() {
  const totalBadges = categories.reduce((acc, cat) => acc + cat.badges.length, 0);

  return (
    <div className="min-h-dvh bg-white text-gray-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 text-xs font-bold text-white">
              PC
            </div>
            <span className="text-lg font-bold tracking-tight">ProCertum</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 sm:flex">
            <a href="#about" className="hover:text-indigo-600 transition-colors">
              O systemie
            </a>
            <a href="#badges" className="hover:text-indigo-600 transition-colors">
              Badge'e
            </a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">
              Kontakt
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 px-5 py-2 text-sm font-medium text-white shadow-sm transition-all hover:shadow-md hover:brightness-110"
          >
            Zamów badge
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pb-24 pt-20 sm:px-6 sm:pt-28 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-indigo-100/50 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full from-blue-100/50 to-cyan-100/50 bg-gradient-to-br blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
            System certyfikacji profesjonalistów
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              ProCertum
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Weryfikowalne, cyfrowe badge'e certyfikacyjne dla wysokospecjalizowanych profesjonalistów.
            Potwierdź swoje kwalifikacje i buduj zaufanie na rynku.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#badges"
              className="rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 px-8 py-3 text-base font-medium text-white shadow-md transition-all hover:shadow-lg hover:brightness-110"
            >
              Zobacz badge'e
            </a>
            <a
              href="#contact"
              className="rounded-full border border-gray-200 bg-white px-8 py-3 text-base font-medium text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:shadow-md"
            >
              Skontaktuj się
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">
                {totalBadges}
              </span>
              <span>Badge'ów</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">
                6
              </span>
              <span>Kategorii</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">
                ✓
              </span>
              <span>Weryfikowalne</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="about" className="border-t border-gray-100 bg-gray-50/50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Jak to działa?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Proces uzyskania cyfrowego badge'a certyfikacyjnego jest prosty i przejrzysty.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-blue-100">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Weryfikacja kwalifikacji</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Przedstaw dokumenty potwierdzające Twoje kwalifikacje i doświadczenie w danej specjalizacji.
                Nasz zespół weryfikuje je zgodnie z obowiązującymi standardami.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-blue-100">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Otrzymanie badge'a</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Po pozytywnej weryfikacji otrzymujesz cyfrowy badge z unikalnym identyfikatorem,
                który możesz umieścić w CV, na LinkedIn i w stopce e-mail.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-blue-100">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Weryfikowalność</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Każdy badge jest weryfikowalny — pracodawcy i klienci mogą sprawdzić autentyczność
                Twoich kwalifikacji poprzez nasz rejestr certyfikowanych specjalistów.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Badges Gallery */}
      <section id="badges" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Katalog badge'ów certyfikacyjnych
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              {totalBadges} badge'ów w {categories.length} kategoriach specjalistycznych.
              Każdy badge to nowoczesna, spójna wizualnie odznaka z czytelnym skrótem specjalizacji.
            </p>
          </div>
          <div className="mt-16 space-y-16">
            {categories.map((category) => (
              <BadgeCategorySection key={category.title} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-gray-100 bg-gray-50/50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Zainteresowany badge'm?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Skontaktuj się z nami, aby uzyskać więcej informacji o procesie certyfikacji,
            kosztach i możliwościach dla Twojej organizacji.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">E-mail</h3>
              <p className="mt-2 text-sm text-gray-500">kontakt@procertum.pl</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">Telefon</h3>
              <p className="mt-2 text-sm text-gray-500">+48 123 456 789</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">Organizacje</h3>
              <p className="mt-2 text-sm text-gray-500">Licencjonowanie systemu badge'ów dla firm i instytucji</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 text-xs font-bold text-white">
                PC
              </div>
              <span className="text-lg font-bold tracking-tight">ProCertum</span>
            </div>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} ProCertum. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}