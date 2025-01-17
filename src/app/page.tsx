import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
      <div className={styles.page}>
        <main className={styles.main}>
          <section className="grid gap-8 xl:gap-12">
            <div className="space-y-3">
              {/* <hr className="mb-14 md:hidden" /> */}

              <h2 className="my-10 text-3xl font-bold">Solana for grow</h2>

              <p className="text-lg">
                I drink a lot of coffee. A lot. If you are interested in
                supporting my work, consider buying me a coffee
              </p>
              <Link
                  target="_blank"
                  href="https://dial.to/devnet?action=solana-action:http://localhost:3000/api/actions/donate"
                  className="inline-flex space-x-3 text-lg font-medium flexer link-muted shadow-indigo"
              >
                <span>Please donate for grow, plz</span>
              </Link>
            </div>
          </section>
      </main>
  <footer className={styles.footer}>
    <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
    >
      <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
      />
      Learn
    </a>
    <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
    >
      <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
      />
      Examples
    </a>
    <a
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
    >
      <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
      />
      Go to nextjs.org →
    </a>
  </footer>
</div>
)
  ;
}
