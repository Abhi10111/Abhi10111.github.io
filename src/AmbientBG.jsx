import './AmbientBG.css';

/**
 * AmbientBG
 * ──────────────────────────────────────────────────────────
 * Minimal, premium background — pure CSS, zero JS overhead.
 *
 * Design:  Deep #0f0921 (Stack.dev "tech-dark") base
 *          + subtle 28px dot grid
 *          + three slowly drifting radial gradient blobs
 *            (purple ← Stack.dev tech-purple, teal ← tech-teal)
 *
 * Inspired by: portfolio.tailwindtemplate.net/stack-astro/
 *              iapurva.com / devport-html.vercel.app
 */
export default function AmbientBG() {
  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
    </div>
  );
}
