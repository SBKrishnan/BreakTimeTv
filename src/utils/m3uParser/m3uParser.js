export const parseM3U = m3uString => {
  const lines = m3uString.split('\n');
  const streams = [];

  let title = '';
  let logo = '';

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    if (line.startsWith('#EXTINF:')) {
      // Extract title
      const titleMatch = line.match(/,(.+)$/);
      title = titleMatch ? titleMatch[1] : 'Unknown Title';

      // Extract logo if available (tvg-logo)
      const logoMatch = line.match(/tvg-logo="([^"]+)"/);
      logo = logoMatch ? logoMatch[1] : '';
    } else if (line.startsWith('http') || line.startsWith('rtmp')) {
      streams.push({title, logo, url: line});
    }
  }

  return streams;
};
