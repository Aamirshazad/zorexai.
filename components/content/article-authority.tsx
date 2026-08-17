import Link from 'next/link';
import { authorityArticles } from '@/content/authority';

type Props = {
  route: string;
};

export function ArticleAuthority({ route }: Props) {
  const article = authorityArticles[route];
  if (!article) return null;

  return (
    <section aria-labelledby="article-quick-answers" className="max-w-3xl mx-auto px-gutter pb-card-gap">
      <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-6 md:p-8">
        <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-3">Practical takeaway</p>
        <p className="font-body-lg text-body-lg text-on-surface mb-8">{article.takeaway}</p>

        <h2 id="article-quick-answers" className="font-headline-md text-headline-md text-primary mb-4">
          Questions this guide answers
        </h2>
        <ul className="space-y-3 mb-8 list-disc pl-5 text-on-surface-variant">
          {article.questions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-label-sm uppercase tracking-widest text-primary mb-3">Relevant capabilities</h3>
            <div className="flex flex-col gap-2">
              {article.serviceLinks.map((item) => (
                <Link key={item.href} href={item.href} className="text-secondary hover:text-primary underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-label-sm uppercase tracking-widest text-primary mb-3">Continue reading</h3>
            <div className="flex flex-col gap-2">
              {article.related.map((item) => (
                <Link key={item.href} href={item.href} className="text-secondary hover:text-primary underline-offset-4 hover:underline">
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
