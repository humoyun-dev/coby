import Image from "next/image";

export function WorkflowSection() {
  return (
    <section id="workflow" className="bg-coby-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coby-primary/80">JARAYON</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-coby-text sm:text-4xl">COBY orqali EcoCoin olish jarayoni</h2>
        </header>

        <figure className="mx-auto mt-10 w-full max-w-[1200px] overflow-hidden rounded-3xl border border-coby-border bg-coby-surfaceMuted p-4 shadow-panel">
          <Image
            src="/images/workflow.png"
            alt="EcoCoin olish jarayoni"
            width={1536}
            height={1024}
            sizes="(min-width: 1280px) 1200px, (min-width: 768px) 92vw, 100vw"
            className="h-auto w-full"
          />
        </figure>
      </div>
    </section>
  );
}
