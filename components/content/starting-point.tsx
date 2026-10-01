import './starting-point.css';
import { startingPointMarkup } from './starting-point-markup';

/**
 * "The starting point" — the adoption-gap statement, its chart and the
 * "what we hear" quotes.
 *
 * A 1:1 port of the same band on the sister site (https://hitl.es/advisory):
 * the donor's markup lives verbatim in `starting-point-markup.ts` and its page
 * CSS is scoped under `.sp-scope` in `starting-point.css`. The band is static
 * (no script drives it), so it stays a server component.
 */
export function StartingPoint() {
  return (
    <section
      id="starting-point"
      className="sp-scope"
      dangerouslySetInnerHTML={{ __html: startingPointMarkup }}
    />
  );
}
