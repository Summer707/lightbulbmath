// src/app/about/page.tsx
import Section from "@/components/Section";
import Image from "next/image";

export default function About() {
  return (
    <Section title="About the Founders">
      <p>
        Lightbulb started in Edison, New Jersey. The idea was simple: invention begins with clarity…
      </p>
      <p className="mt-4">
        The name is a nod to Edison. We like ideas that click…
      </p>
      <Image
        src="/founders-signature.png"
        alt="Signature"
        width={320}
        height={80}
        className="mt-6 h-10 w-auto opacity-70"
      />
    </Section>
  );
}
