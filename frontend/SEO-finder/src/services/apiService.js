const BASE = 'http://localhost:5000';

export async function fetchBusinessData(data) {
  const res = await fetch(`${BASE}/business-data`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function regenerateHeadline(name, location) {
  const res = await fetch(
    `${BASE}/regenerate-headline?name=${encodeURIComponent(name)}&location=${encodeURIComponent(location)}`
  );
  return res.json();
}