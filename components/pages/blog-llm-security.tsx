import Link from 'next/link';
import { FinalCta } from '@/components/content/final-cta';
import { SubPageHero } from '@/components/content/sub-page-hero';
import { ArticleAuthority } from '@/components/content/article-authority';

export default function PageContent() {
  return <>
<main className="font-ui bg-page-wash">
      <SubPageHero
        eyebrow="Strategic Insight"
        icon="Sparkles"
        crumbs={[{label:"Blog",href:"/blog"},{label:"Article"}]}
        title="Zero-Trust AI: Securing Enterprise LLM Deployments"
        meta="By Zorex AI Team · December 12, 2024 · 10 Min Read"
        body="Data sovereignty is non-negotiable. Learn how we architect LLM deployments that keep proprietary enterprise data within defined deployment and access boundaries."
        secondaryLabel="Read More Insights"
        secondaryHref="/blog"
        image={{ src: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=1200', alt: 'Zorex AI visual' }}
      />  <ArticleAuthority route="blog-llm-security" />  <section className="max-w-3xl mx-auto px-5 sm:px-8 py-section-padding"> <p className="lede text-ink mb-6 first-letter:text-6xl first-letter:font-ui first-letter:text-ink first-letter:mr-3 first-letter:float-left">{"The greatest barrier to AI adoption in the enterprise isn't capability; it's security. When executives envision connecting an LLM to their core CRM or ERP, they immediately picture proprietary data inadvertently training a public model or being exposed via prompt injection. These are valid fears, but they are entirely solvable with a Zero-Trust AI architecture."}</p> <p className="mc-body text-ink mb-6">{"At Zorex, we treat LLMs as untrusted actors within the network. By enforcing strict boundaries, we allow the model to reason about data without ever permanently possessing it."}</p> <h2 className="mc-title text-ink mt-8 mb-4">{"VPC Deployments and Air-Gapped Models"}</h2> <p className="mc-body text-ink mb-6">{"For highly regulated industries (healthcare, finance, legal), API calls to public endpoints (like standard OpenAI APIs) are often unacceptable, regardless of zero-retention policies. The solution is deploying open-weight models (like Llama 3 or Mixtral) directly within the client's Virtual Private Cloud (VPC), or utilizing Azure/AWS dedicated endpoints that provide dedicated deployment boundaries where required by the architecture and provider."}</p> <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-4 my-8"> <div className="bg-ink p-6 rounded-[14px]"> <h4 className="font-ui text-lg text-white mb-2">{"Deterministic Guardrails"}</h4> <p className="text-white/60 text-sm">{"We wrap LLM outputs in deterministic parsing layers (like NeMo Guardrails or Outlines) that enforce structured JSON schemas. If the model attempts to deviate or output restricted PII, the guardrail intercepts and blocks the transaction."}</p> </div> <div className="bg-panel-2 p-6 rounded-[14px] border border-[var(--line)]"> <h4 className="font-ui text-lg text-ink mb-2">{"Role-Based Access Control (RBAC)"}</h4> <p className="text-ink-2 text-sm">{"The agent inherits the permissions of the user interacting with it. If User A cannot access Q3 financial reports in the CRM, the agent executing a query on behalf of User A will be denied access at the database level. Frameworks detailed by"}<a className="text-ink underline hover:text-ink-2" href="https://www.microsoft.com/en-us/security/business/zero-trust" target="_blank" rel="noopener noreferrer">{"Microsoft's Zero Trust"}</a>{"research emphasize this boundary as crucial."}</p> </div> </div> <p className="mc-body text-ink mb-section-padding">{"Security in the age of generative AI requires shifting from perimeter defense to data-centric defense. By combining VPC deployments, strict RBAC, and deterministic output parsing, we deliver the power of cognitive automation with the security of traditional enterprise software."}</p> </section>  <FinalCta
        heading="Ready to deploy AI inside your own boundary?"
        body="Tell us which systems and records are involved, and we will set out what access the workflow needs and what it never gets."
        secondaryLabel="Read more insights"
        secondaryHref="/blog"
      /> </main>
  </>;
}
