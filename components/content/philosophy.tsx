import './philosophy.css';
import { philosophyMarkup } from './philosophy-markup';

/**
 * "Our Philosophy" — a centered statement band.
 *
 * A 1:1 port of the same band on the sister site (https://hitl.es/advisory):
 * the donor's markup lives verbatim in `philosophy-markup.ts` and its page CSS
 * is scoped under `.ph-scope` in `philosophy.css`. The band is static, so it
 * stays a server component.
 */
export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="ph-scope"
      dangerouslySetInnerHTML={{ __html: philosophyMarkup }}
    />
  );
}
