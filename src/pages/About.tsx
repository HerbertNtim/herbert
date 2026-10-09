import { PageMeta } from "../components/PageMeta";
import { SectionLabel } from "../components/SectionLabel";
import { faqs } from "../data/content";

export function About() {
  return (
    <div>
      <PageMeta
        title="About · Herbert"
        description="Software Engineer (Full-Stack & Data Science) based in Kumasi, Ghana. Building full-stack applications with TypeScript, React, Next.js, and Python. Exploring data science and machine learning."
      />
      <p className="mb-4 font-mono text-[12px] tracking-[0.25em] text-fg-tertiary uppercase">
        About
      </p>
      <h1 className="text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-fg">
        Herbert Ntim
      </h1>
      <div className="mt-12 flex flex-col gap-6 text-[16px] leading-[1.75] text-fg-secondary sm:text-[15px] sm:leading-[1.8]">
        <p>
          I'm a software engineer based in Kumasi, Ghana, with a background in
          Computer Engineering from KNUST. I enjoy building useful software,
          solving practical problems, and understanding how things work under
          the hood. I've worked with the College of Engineering at KNUST,
          developing automation tools and maintaining examination systems that
          support thousands of students. That experience showed me how software
          can make everyday processes more efficient and reliable. I'm currently
          working with First Gen Global Network, building a student guidance
          platform to help Ghanaian senior high school students navigate
          university admissions, scholarships, and career opportunities. I enjoy
          turning ideas and designs into practical applications that solve real
          problems. My main tools are TypeScript, JavaScript, React, Next.js,
          and Python. I've worked across frontend development, full-stack
          applications, and API integration, and I'm continuing to strengthen my
          backend engineering skills. Beyond software development, I'm
          interested in data science, machine learning, and computer vision. I'm
          preparing for the next stage of my academic journey in Computer
          Engineering, where I hope to deepen my technical knowledge and explore
          research problems through practical experimentation. I also value
          learning in public and collaborating with other developers. I've
          started contributing to open-source projects through the Zero To
          Mastery community, and I'm looking to become more involved in building
          software with others. Outside coding, I'm focused on continuous
          learning, improving my communication skills, and becoming a more
          thoughtful engineer. If you're working on an interesting project,
          exploring a technical idea, or simply want to connect, feel free to
          reach out.
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
