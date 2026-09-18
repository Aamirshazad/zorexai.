import Link from 'next/link';
import { authorityArticles } from '@/content/authority';

type Props = {
  route: string;
};

export function ArticleAuthority({ route }: Props) {
  const article = authorityArticles[route];
  if (!article) return null;

  return (
    <section aria-labelledby="article-quick-answers" className="max-w-3xl mx-auto px-5 sm:px-8 pb-8">
      <div className="reveal rounded-[22px] border border-[var(--line)] bg-page-wash p-6 md:p-8">
        <p className="eyebrow uppercase tracking-widest text-ink-2 mb-3">Practical takeaway</p>
        <p className="lede text-ink mb-8">{article.takeaway}</p>

        <h2 id="article-quick-answers" className="mc-title text-ink mb-4">
          Questions this guide answers
        </h2>
        <ul className="space-y-3 mb-8 list-disc pl-5 text-ink-2">
          {article.questions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="uppercase tracking-widest text-ink mb-3">Relevant capabilities</h3>
            <div className="flex flex-col gap-2">
              {article.serviceLinks.map((item) => (
                <Link key={item.href} href={item.href} className="text-ink-2 hover:text-ink underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="uppercase tracking-widest text-ink mb-3">Continue reading</h3>
            <div className="flex flex-col gap-2">
              {article.related.map((item) => (
                <Link key={item.href} href={item.href} className="text-ink-2 hover:text-ink underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
