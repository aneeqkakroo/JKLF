import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShieldCheck, ShieldX, CircleHelp } from 'lucide-react';
import { isCardToken, verifyMembership } from '../lib/verifyMembership';
import config from '../data/membership-public.json';
import './VerifyMembership.css';

function VerificationResult({ token }) {
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    let live = true;
    const timer = setTimeout(() => controller.abort(), 15000);
    verifyMembership({token, url: import.meta.env.VITE_SUPABASE_URL || config.url, key: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || config.publishableKey, signal: controller.signal})
      .then(data => { if (live) setResult(data); })
      .catch(() => { if (live) setError('Unable to check membership right now. Please check your connection and try again.'); })
      .finally(() => clearTimeout(timer));
    return () => { live = false; clearTimeout(timer); controller.abort(); };
  }, [token, attempt]);
  if (error) return <div role="alert"><CircleHelp size={40} aria-hidden="true"/><h2>Verification unavailable</h2><p>{error}</p><button type="button" onClick={() => { setError(''); setResult(null); setAttempt(n => n + 1); }}>Try again</button></div>;
  if (!result) return <div role="status" aria-live="polite"><p>Checking membership…</p></div>;
  if (result.kind === 'not-found') return <div role="status"><CircleHelp size={40} aria-hidden="true"/><h2>Card not found</h2><p>We could not find a membership for this QR code. Ask the card holder to open their latest card in Nazm.</p></div>;
  return <div role="status" aria-live="polite" className={`verification-result verification-result--${result.kind}`}>
    {result.kind === 'active' ? <ShieldCheck size={44} aria-hidden="true"/> : <ShieldX size={44} aria-hidden="true"/>}
    <p className="verification-label">Member name</p><h2>{result.name}</h2>
    <p className="verification-status">{result.status} membership</p>
    <p>Status checked against the current Nazm membership register.</p>
  </div>;
}
export default function VerifyMembership() {
  const [params] = useSearchParams();
  const token = params.getAll('token').length === 1 ? params.get('token') : null;
  return <section className="membership-verification" aria-labelledby="verification-heading">
    <title>Verify membership | JKLF</title><meta name="robots" content="noindex, nofollow"/><meta name="referrer" content="no-referrer"/>
    <div className="verification-intro"><p className="verification-eyebrow">NAZM MEMBERSHIP</p><h1 id="verification-heading">Verify membership</h1><p>Check the current status of a Nazm membership card.</p></div>
    <div className="verification-card">{isCardToken(token) ? <VerificationResult key={token} token={token}/> : <div role="status"><CircleHelp size={40} aria-hidden="true"/><h2>Scan a membership card</h2><p>This link is missing a valid verification code. Scan the QR code on a member’s Nazm card to check their membership.</p></div>}</div>
    <p className="verification-privacy">Only the member’s name and membership status are shown publicly.</p>
  </section>;
}
