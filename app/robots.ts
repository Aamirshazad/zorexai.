import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-data';

const allowAll = { allow: '/' as const };

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Broad access for normal search engines and otherwise unidentified crawlers.
      { userAgent: '*', ...allowAll },

      // Google Search + AI-grounding/training control token.
      // Google-Extended is a robots.txt control token, not a separate HTTP crawler.
      { userAgent: 'Googlebot', ...allowAll },
      { userAgent: 'Googlebot-Image', ...allowAll },
      { userAgent: 'Google-Extended', ...allowAll },

      // OpenAI: ChatGPT Search, user-requested fetches, training and Ads review.
      { userAgent: 'OAI-SearchBot', ...allowAll },
      { userAgent: 'ChatGPT-User', ...allowAll },
      { userAgent: 'GPTBot', ...allowAll },
      { userAgent: 'OAI-AdsBot', ...allowAll },

      // Anthropic: Claude Search, user-requested fetches and training.
      { userAgent: 'Claude-SearchBot', ...allowAll },
      { userAgent: 'Claude-User', ...allowAll },
      { userAgent: 'ClaudeBot', ...allowAll },

      // Perplexity: search indexing and user-requested fetches.
      { userAgent: 'PerplexityBot', ...allowAll },
      { userAgent: 'Perplexity-User', ...allowAll },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
