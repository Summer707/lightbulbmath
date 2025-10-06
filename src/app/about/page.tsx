import Section from "@/components/Section";


export default function About() {
return (
<Section title="About the Founders">
<p>
Lightbulb started in Edison, New Jersey. The idea was simple: invention begins with clarity. We built a contest where reasoning beats memorization and where students at any level can switch on insight.
</p>
<p className="mt-4">
The name is a nod to Edison. We like ideas that click. We publish clean problems, short solutions, and we keep the format honest.
</p>
<img src="/founders-signature.png" alt="Signature" className="mt-6 h-10 opacity-70" />
</Section>
);
}