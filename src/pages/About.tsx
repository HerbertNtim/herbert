import { PageMeta } from "../components/PageMeta";
import { SectionLabel } from "../components/SectionLabel";
import { TextLink } from "../components/TextLink";
import { faqs } from "../data/content";

export function About() {
  return (
    <div>
      <PageMeta
        title="About · Leonardo Maldonado"
        description="Senior full-stack engineer based in Valencia, Spain. Previously sole engineer on Spaceship's domain search at Namecheap (3M+ domains sold). Creator of 33 JavaScript Concepts. Currently building Strait."
      />
      <p className="mb-4 font-mono text-[12px] tracking-[0.25em] text-fg-tertiary uppercase">
        About
      </p>
      <h1 className="text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-fg">
        Leonardo Maldonado
      </h1>
      <div className="mt-12 flex flex-col gap-6 text-[16px] leading-[1.75] text-fg-secondary sm:text-[15px] sm:leading-[1.8]">
        <p>
          I&apos;m Leonardo. I grew up in{" "}
          <span className="text-fg-muted">Franca, Brazil</span> and moved to{" "}
          <span className="text-fg-muted">Valencia, Spain</span> a few years
          ago. I wanted to be closer to the European tech scene and, honestly, I
          just really like it here. The weather, the food, the pace of life.
        </p>
        <p>
          I&apos;ve been writing code for about 7 years now. Most of that time
          was spent at{" "}
          <TextLink href="https://www.namecheap.com">Namecheap</TextLink>, where
          I was the sole engineer on{" "}
          <TextLink href="https://www.spaceship.com/domain-search/">
            Spaceship&apos;s domain search
          </TextLink>. I built the whole thing from zero and helped the platform sell 3M+
          domains: the architecture, the real-time pricing over WebSocket, bulk
          search, multi-currency support across 30+ currencies. Four and a half
          years of owning a product end to end.
        </p>
        <p>
          Right now I&apos;m heads-down on{" "}
          <TextLink href="https://strait.dev">Strait</TextLink>, an agentic
          workflow orchestration platform written in Go. A single binary under
          30MB that runs background jobs, scheduled tasks, and multi-step
          workflows. It ships with SDKs in five languages, MCP servers, and a
          CLI. PostgreSQL for durable queuing, Redis for real-time events.
        </p>
        <p>
          On the side, I&apos;ve built a few other things I&apos;m proud of.{" "}
          <TextLink href="https://www.getshopwyse.com">Shopwyse</TextLink> is a
          retail ERP I built full-stack with TanStack Start and PostgreSQL.{" "}
          <TextLink href="https://www.trypolyglot.ai">Polyglot</TextLink> is an
          AI writing tool that interviews you before drafting anything. I also
          write CLI tools in Go and Rust when I want to learn something new by
          solving a real problem.
        </p>
        <p>
          In 2018, I made{" "}
          <TextLink href="https://github.com/leonardomso/33-js-concepts">
            33 JavaScript Concepts
          </TextLink>. It was supposed to be a personal study guide, but it took off. 66K+
          stars now, translated into 40+ languages.{" "}
          <TextLink href="https://github.blog/2018-12-13-new-open-source-projects/#top-projects-of-2018">
            GitHub named it a top project of 2018
          </TextLink>. I still maintain it.
        </p>
        <p>
          I also spent a few years writing for{" "}
          <TextLink href="https://www.telerik.com/blogs/author/leonardo-maldonado">
            Progress
          </TextLink>{" "}
          and{" "}
          <TextLink href="https://blog.logrocket.com/author/leonardomaldonado/">
            LogRocket
          </TextLink>. 100+ articles on JavaScript, TypeScript, React, Node.js, GraphQL.
          Over a million views total. I like explaining things clearly and
          helping other developers learn.
        </p>
        <p>
          My main stack is TypeScript, React, Node.js, and Go, but I don&apos;t
          treat tools like an identity. I pick whatever gets the job done. Rust
          for side projects, PostgreSQL for data, whatever framework makes sense
          for the problem.
        </p>
        <p>
          When I&apos;m not coding, I&apos;m probably walking around Valencia,
          reading, or tinkering with a side project that may or may not ship. I
          speak Portuguese, English, and Spanish.
        </p>
        <p>
          If you want to chat, I&apos;m always up for it.{" "}
          <TextLink href="mailto:leonardomso11@gmail.com" external={false}>
            Send me an email
          </TextLink>{" "}
          or find me on <TextLink href="https://x.com/leonardomso">X</TextLink>.
        </p>
      </div>

      <section className="mt-24" aria-labelledby="faq-heading">
        <SectionLabel as="h2" id="faq-heading">
          FAQ
        </SectionLabel>
        <div className="flex flex-col gap-6">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-lg border border-surface-border bg-surface-low p-5 transition-colors hover:border-surface-border-strong"
            >
              <summary className="faq-summary cursor-pointer text-[15px] font-medium text-fg">
                {item.question}
              </summary>
              <p className="mt-3 text-[14px] leading-[1.75] text-fg-secondary sm:text-[15px] sm:leading-[1.8]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
