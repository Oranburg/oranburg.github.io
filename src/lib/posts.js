// Shared helpers for the insights collection: Jekyll-parity URLs and sorting.
export function postUrl(post) {
  const m = post.id.match(/^(\d{4})-(\d{2})-(\d{2})-(.+?)(?:\.md)?$/);
  if (!m) throw new Error(`Post filename without a date prefix: ${post.id}`);
  return `/insights/${m[1]}/${m[2]}/${m[3]}/${m[4]}/`;
}

export function byDateDesc(a, b) {
  return b.data.date.valueOf() - a.data.date.valueOf();
}

export function dateLabel(d) {
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

export function stripHtml(s) {
  return (s || "").replace(/<[^>]+>/g, "");
}
