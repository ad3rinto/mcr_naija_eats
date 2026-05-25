const grid = document.getElementById('vendor-grid');
const search = document.getElementById('search');
const locFilter = document.getElementById('location-filter');
const dishFilter = document.getElementById('dish-filter');
const noResults = document.getElementById('no-results');
let vendors = [];

fetch('data/vendors.json')
  .then(res => res.json())
  .then(data => {
    // Clean whitespace from keys/values to prevent layout breaks
    vendors = data.map(v => ({
      ...v,
      name: v.name?.trim(),
      location: v.location?.trim(),
      specialties: v.specialties?.map(s => s.trim()) || [],
      note: v.note?.trim(),
      address: v.address?.trim(),
      website: v.website?.trim(),
      phone: v.phone?.trim(),
      instagram: v.instagram?.trim(),
      tiktok: v.tiktok?.trim()
    }));
    render(vendors);
  })
  .catch(() => grid.innerHTML = '<p style="text-align:center; padding:2rem; color: var(--muted);">Failed to load vendors. Please check your data file.</p>');

function render(list) {
  grid.innerHTML = '';
  if (list.length === 0) {
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';

  list.forEach(v => {
    const card = document.createElement('div');
    card.className = 'card';

    // Build contact/info HTML safely
    const addressHtml = v.address ? `<div class="contact-item">🏠 <span>${v.address}</span></div>` : '';
    const phoneHtml = v.phone ? `<div class="contact-item">📞 <a href="tel:${v.phone.replace(/\s/g, '')}">${v.phone}</a></div>` : '';
    const websiteHtml = v.website ? `<div class="contact-item">🌐 <a href="${v.website}" target="_blank">Website ↗</a></div>` : '';

    const contactSection = (addressHtml || phoneHtml || websiteHtml)
      ? `<div class="contact-info">${addressHtml}${phoneHtml}${websiteHtml}</div>`
      : '';

    card.innerHTML = `
      <h3>${v.name}</h3>
      <div class="meta">📍 ${v.location} • 💷 ${v.price} • 🧼 ${v.hygiene}/5 ${v.delivery ? '• 🛵 Delivery' : ''}</div>
      <div class="tags">${v.specialties.map(s => `<span class="badge">${s}</span>`).join('')}</div>
      <p class="note">"${v.note}"</p>
      ${contactSection}
      <div class="links">
        ${v.instagram ? `<a href="${v.instagram}" target="_blank">Instagram ↗</a>` : ''}
        ${v.tiktok ? `<a href="${v.tiktok}" target="_blank">TikTok ↗</a>` : ''}
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterVendors() {
  const q = search.value.toLowerCase();
  const loc = locFilter.value;
  const dish = dishFilter.value;

  render(vendors.filter(v => {
    const matchQ = v.name.toLowerCase().includes(q) ||
                   v.specialties.some(s => s.toLowerCase().includes(q)) ||
                   v.note.toLowerCase().includes(q);
    return matchQ && (!loc || v.location === loc) && (!dish || v.specialties.includes(dish));
  }));
}

[search, locFilter, dishFilter].forEach(el =>
  el.addEventListener(el === search ? 'input' : 'change', filterVendors)
);