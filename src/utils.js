export function roomUrlFromPageUrl() {
  const match = window.location.search.match(/roomUrl=([^&]+)/i);
  return match && match[1] ? decodeURIComponent(match[1]) : null;
}

export function pageUrlFromRoomUrl(roomUrl) {
  return (
    window.location.href.split('?')[0] + (roomUrl ? `?roomUrl=${encodeURIComponent(roomUrl)}` : '')
  );
}


export function tokenFromPageUrl() {
  const match = window.location.search.match(/token=([^&]+)/i);
  return match && match[1] ? decodeURIComponent(match[1]) : null;
}

export function pageUrlFromToken(token) {
  return (
    window.location.href.split('?')[0] + (token ? `?token=${encodeURIComponent(token)}` : '')
  );
}
