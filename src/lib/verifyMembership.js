export const isCardToken = token => typeof token === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(token);

export async function verifyMembership({ token, url, key, signal, request = fetch }) {
  if (!isCardToken(token)) return { kind: 'invalid' };
  if (!url || !key) throw new Error('Verification is temporarily unavailable. Please try again later.');
  const response = await request(`${url.replace(/\/$/, '')}/rest/v1/rpc/verify_card`, {
    method: 'POST', headers: { apikey: key, 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }), signal, cache: 'no-store', referrerPolicy: 'no-referrer', credentials: 'omit',
  });
  if (!response.ok) throw new Error('Unable to check membership right now. Please try again.');
  const data = await response.json();
  if (data?.valid === false && !data.name && !data.status) return { kind: 'not-found' };
  if (typeof data?.name !== 'string' || !data.name.trim() || !((data.valid === true && data.status === 'Active') || (data.valid === false && data.status === 'Inactive'))) {
    throw new Error('Unable to confirm membership. Please try again later.');
  }
  // Deliberately discard every field except the public name and current status.
  return { kind: data.valid ? 'active' : 'inactive', name: data.name, status: data.status };
}
