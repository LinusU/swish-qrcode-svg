const core = require('@qrcode/core')

const TEMPLATE = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="{VIEWBOX}"{DIMENSIONS}><defs><linearGradient id="v" x1="0%" x2="100%" y1="100%" y2="0%" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#B43092"/><stop offset="100%" stop-color="#EF4123"/></linearGradient><g id="w"><defs><filter id="a" width="70.8" height="74.5" x="78.8" y="-4.6" filterUnits="userSpaceOnUse"><feFlood flood-color="#fff" flood-opacity="1" result="back"/><feBlend in="SourceGraphic" in2="back"/></filter></defs><mask id="b" width="70.8" height="74.5" x="78.8" y="-4.6" maskUnits="userSpaceOnUse"><g filter="url(#a)"><linearGradient id="c" x1="78.8281" x2="149.6738" y1="32.708" y2="32.708" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="2.338827e-03" stop-color="#fefefe"/><stop offset="0.1696" stop-color="#bcbcbc"/><stop offset="0.3339" stop-color="#838383"/><stop offset="0.4912" stop-color="#545454"/><stop offset="0.64"
stop-color="#2f2f2f"/><stop offset="0.7784" stop-color="#151515"/><stop offset="0.9025" stop-color="#060606"/><stop offset="1"/></linearGradient><path fill="url(#c)" d="M98.8,70c0,0-20.9-10-20-39c0.9-28.9,21-31.7,21-31.7l24.3-3.9l25.5,4.3 L98.8,70z" mask="url(#b)"/></g></mask><linearGradient id="d" x1="78.8281" x2="149.6738" y1="32.708" y2="32.708" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#69a8d9"/><stop offset="8.420706e-02" stop-color="#7db4de"/><stop offset="0.2985" stop-color="#abceea"/><stop offset="0.5037" stop-color="#d0e4f3"/><stop offset="0.6945" stop-color="#eaf3fa"/><stop offset="0.8655" stop-color="#f9fcfe"/><stop offset="1" stop-color="#fff"/></linearGradient><defs><filter id="e" width="70.8" height="74.5" x="78.8" y="-9.5" filterUnits="userSpaceOnUse"><feFlood flood-color="#fff" flood-opacity="1" result="back"/><feBlend in="SourceGraphic" in2="back"/></filter></defs><mask id="f" width="70.8" height="74.5" x="78.8" y="-9.5" maskUnits="userSpaceOnUse"><g
filter="url(#e)"><linearGradient id="g" x1="78.7539" x2="149.5995" y1="27.7178" y2="27.7178" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="2.338827e-03" stop-color="#fefefe"/><stop offset="0.1696" stop-color="#bcbcbc"/><stop offset="0.3339" stop-color="#838383"/><stop offset="0.4912" stop-color="#545454"/><stop offset="0.64" stop-color="#2f2f2f"/><stop offset="0.7784" stop-color="#151515"/><stop offset="0.9025" stop-color="#060606"/><stop offset="1"/></linearGradient><path fill="url(#g)" d="M98.8,65c0,0-20.9-10-20-39c0.9-28.9,21-31.7,21-31.7l24.3-3.9l25.5,4.3 L98.8,65z" mask="url(#f)"/></g></mask><linearGradient id="h" x1="78.7539" x2="149.5995" y1="27.7178" y2="27.7178" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#69a8d9"/><stop offset="8.420706e-02" stop-color="#7db4de"/><stop offset="0.2985" stop-color="#abceea"/><stop offset="0.5037" stop-color="#d0e4f3"/><stop offset="0.6945" stop-color="#eaf3fa"/><stop offset="0.8655"
stop-color="#f9fcfe"/><stop offset="1" stop-color="#fff"/></linearGradient><defs><filter id="i" width="70.8" height="74.5" x="76.3" y="-4.6" filterUnits="userSpaceOnUse"><feFlood flood-color="#fff" flood-opacity="1" result="back"/><feBlend in="SourceGraphic" in2="back"/></filter></defs><mask id="j" width="70.8" height="74.5" x="76.3" y="-4.6" maskUnits="userSpaceOnUse"><g filter="url(#i)"><linearGradient id="k" x1="76.2558" x2="147.1015" y1="32.708" y2="32.708" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="2.338827e-03" stop-color="#fefefe"/><stop offset="0.1696" stop-color="#bcbcbc"/><stop offset="0.3339" stop-color="#838383"/><stop offset="0.4912" stop-color="#545454"/><stop offset="0.64" stop-color="#2f2f2f"/><stop offset="0.7784" stop-color="#151515"/><stop offset="0.9025" stop-color="#060606"/><stop offset="1"/></linearGradient><path fill="url(#k)" d="M96.3,70c0,0-20.9-10-20-39c0.9-28.9,21-31.7,21-31.7l24.3-3.9l25.5,4.3 L96.3,70z"
mask="url(#j)"/></g></mask><linearGradient id="l" x1="76.2558" x2="147.1015" y1="32.708" y2="32.708" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#69a8d9"/><stop offset="8.420706e-02" stop-color="#7db4de"/><stop offset="0.2985" stop-color="#abceea"/><stop offset="0.5037" stop-color="#d0e4f3"/><stop offset="0.6945" stop-color="#eaf3fa"/><stop offset="0.8655" stop-color="#f9fcfe"/><stop offset="1" stop-color="#fff"/></linearGradient><g><defs><path id="m" d="M215.2,107.6c0,59.4-48.2,107.6-107.6,107.6c-13.8,0-27-2.6-39.2-7.4c34,10.7,72.7,0.3,96.4-29.2 c30.7-38.2,24.9-94-13-125l23.8-29.5C199.8,43.9,215.2,74,215.2,107.6z M50.7,37C75.4,6.4,116-3.7,151,9.1 C137.7,3.3,123,0,107.6,0C48.2,0,0,48.2,0,107.6c0,33.8,15.6,64,40.1,83.7l23.7-29.4C25.9,130.9,20,75.2,50.7,37z"/></defs><clipPath id="n"><use overflow="visible" xlink:href="#m"/></clipPath><g clip-path="url(#n)"><image width="655" height="863" overflow="visible" transform="matrix(0.24 0 0 0.24 62.541 19.4766)"
xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAUCAIAAADdpfBFAAACC0lEQVR4AU3QtbIFRRhF4bX79Fy/uEN0E9xJeRTeiwdBQyzF3d312Gj/m56ag1St6ugb6a13f37yNMpZxGlMZ1HSaHox2CMMzOd0yANpkopSEZZAuGaHKPzbQumUR2l+AAUyYBMQpuD/UbeiJQ9KjXysFCoGDHFANY/Q4b0Oupu1B0Uhseii2U1moVt5N2t3zrtVWuEjpzEwIuRilivu5TXeJLd2iwflVtel9OeR41Kr0Eilg9zbW+L3quUdbuW+anIp9+zSV2n1w3lEjHKttf9U+Un19KZSFuqJHOUB+9Z1+vQov3+nupP9FD+qfJXiV2baVepldRfyND4idSU9/NPqsV959uzNT8Y3iV/tPR7NBAUH1IyefnvtUdPO+5/oX5yeeu2N0/Sy+A42ooOBw/JRy5uPGP7w/juv36e8v3prfOKR5uoovSe+ln7DG2iVejzAmDefuvuZ9humX4mBbyduStffxRONbhHfS7/DGnaohT7vv6H/hTLfHSbW5qfQsU5u1lWTLszP4g+0gS20udLY4w4P2HTmr+B3Kad8fdyW0wk6x3+iqnc5ljlHKGAmsw82iWOzIl0T12c16BhOpdNc3b9zumromR/YqSoLXXDZkOEIjjPT/yYyYUYzP2COUMYJzjhtSCZnT9RYNARMVc/RQQNJAGc+bpyyA5Y8N+uaGapW1VrZCQRW8zdr8p0V/ZCrmQAAAABJRU5ErkJggg=="/></g><g clip-path="url(#n)"><image width="701" height="907" overflow="visible" transform="matrix(0.24 0 0 0.24 -8.1566 -9.8024)"
xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAUCAIAAADdpfBFAAACIUlEQVR4AWLc+NGVDVDjXOhAVGtRGP5Xp6P34u7wAhAPMZ4biUMM1wjubqPnTGUvpkhS319Xtr0Krx0bxzpiE7F1bKPtIpYtXKwiF6jOVQlCIqHFbSR1K4zRWEDGYSyC3PkfOiuFIi1gYS+lJoVkBIEZtJtOtu/pWlx1VOoplJSWohOdwYYL/0Pdhr7PrDw+7EktmaVcRz8yAgjGaKI5R9wrrdGqaWX9qlQzXjm10Rz4X+pq6si+H++sXUrbzmpKPyWmpdMuUiACNyim4DPZcT+64kv4/9L/b+yUvk0+bFM0CUPFMz4oftNNP2BVdJVn6STfa99zSJ+u8o/3t0qrvhC/K77Xbc0RD4iOuqlSQZPicacnfll8eE9+9+Fpiq/VPknxK3Eiu99vjMCGMXDH7eoXPpi/feyVl/Jrb8RhpnR65HpYOhhjGKLSJ+rB52/u+u3Vh3ZvPff85qNFelv+Xuxz+Z1oDHelz25nyp9M3/v0GfVLPun58fbsY/mRhT6Rvs/lD0ehX0fkjdY98y+ef6D/jmdOwTddGz1wX9qmdO9Nj9Q20S+jgevvlN+I46CuFPOH+Tm04P9380wue2KiXdxO3M71z3F1YYygwSXYJzYmxTrXvf/t4eh2UFz/ox2CMLM5m6O1xLke1UfwbQxKwRU3aAwN1czBRawht1vkxf0slyGG62M4wBgaFJjNhHI7u0+KyhD/uJHKGAzdPeKLmeEv4CDM8ozh5uQAAAAASUVORK5CYII="/></g><g><linearGradient id="o" x1="12.6311" x2="194.442" y1="80.4874" y2="80.4874" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00adee"/><stop
offset="0.1767" stop-color="#3bc0f2"/><stop offset="0.4009" stop-color="#80d6f7"/><stop offset="0.6035" stop-color="#b7e8fa"/><stop offset="0.7772" stop-color="#def4fd"/><stop offset="0.9151" stop-color="#f6fcfe"/><stop offset="1" stop-color="#fff"/></linearGradient><path fill="url(#o)" d="M62.6,161C25.8,129.8,20.3,74.8,50.7,37C75.4,6.4,116-3.7,151,9.1 C137.7,3.3,123,0,107.6,0C66.7,0,31.2,22.8,13,56.3c-0.1,1.8-0.2,3.5-0.3,5.3C10.6,129,54.4,156.4,62.6,161z" opacity="0.4"/></g><g><defs><path id="p" d="M215.2,107.6c0,59.4-48.2,107.6-107.6,107.6c-13.8,0-27-2.6-39.2-7.4c34,10.7,72.7,0.3,96.4-29.2 c30.7-38.2,24.9-94-13-125l23.8-29.5C199.8,43.9,215.2,74,215.2,107.6z"/></defs><clipPath id="r"><use overflow="visible" xlink:href="#p"/></clipPath><defs><filter id="q" width="161.3" height="164.6" x="42.1" y="53.2" filterUnits="userSpaceOnUse"><feFlood flood-color="#fff" flood-opacity="1" result="back"/><feBlend in="SourceGraphic" in2="back"/></filter></defs><mask id="s" width="161.3"
height="164.6" x="42.1" y="53.2" maskUnits="userSpaceOnUse"><g filter="url(#q)"><linearGradient id="t" x1="87.3859" x2="191.3714" y1="241.3216" y2="101.952" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="8.587653e-02" stop-color="#080808"/><stop offset="0.2181" stop-color="#1d1d1d"/><stop offset="0.3803" stop-color="#414141"/><stop offset="0.566" stop-color="#727272"/><stop offset="0.7717" stop-color="#b1b1b1"/><stop offset="0.9913" stop-color="#fcfcfc"/><stop offset="1" stop-color="#fff"/></linearGradient><path fill="url(#t)" d="M152,53.2c0,0,53.5,25.7,51.3,100 c-2.3,74.3-53.9,81.4-53.9,81.4L87,244.5l-65.5-11.1L152,53.2z" clip-path="url(#r)" mask="url(#s)"/></g></mask><linearGradient id="u" x1="102.4825" x2="185.8722" y1="205.5663" y2="93.8009" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="8.587653e-02" stop-color="#fffff7"/><stop offset="0.2181" stop-color="#fffde2"/><stop offset="0.3803" stop-color="#fffbbe"/><stop offset="0.566"
stop-color="#fff98d"/><stop offset="0.7717" stop-color="#fff54e"/><stop offset="0.9913" stop-color="#fff103"/><stop offset="1" stop-color="#fff100"/></linearGradient><path fill="url(#u)" d="M152,53.2c0,0,53.5,25.7,51.3,100 c-0.5,15.1-10.5,23.6-17.2,32c-5.1,6.4-29.3,22.9-48.3,28.4c-19,5.6-36.8,5-52.2,2c-15.4-3-43.5-22-43.5-22L152,53.2z" clip-path="url(#r)" opacity="0.4"/></g></g></g></defs>{BACKGROUND}<g fill="url(#v)">{CIRCLES}</g>{CORNERS}{LOGO}</svg>`

const clearSquare = (data, size, x, y, side) => {
  for (let yOffset = 0; yOffset < side; yOffset++) {
    for (let xOffset = 0; xOffset < side; xOffset++) {
      data[((y + yOffset) * size) + x + xOffset] = 0
    }
  }
}

const background = (color) => (
  `<rect width="100%" height="100%" fill="${color}"/>`
)

const circles = (size, data) => {
  let result = ''
  let cx = 4
  let cy = 4

  const rowStopsAt = 4 + size - 1

  for (let i = 0; i < data.length; i++) {
    if (data[i] !== 0) {
      result += `<circle cx="${cx}.5" cy="${cy}.5" r="0.45"/>`
    }

    if (cx === rowStopsAt) {
      cx = 4
      cy += 1
    } else {
      cx += 1
    }
  }

  return result
}

const corners = (size) => (
  '<path fill="none" stroke="url(#v)" stroke-linejoin="round" stroke-width="1.0" d="M 4.5 10.5 v -0.875 a 5.125 5.125 0 0 1 5.125 -5.125 h 0.875 v 6 Z"/>' +
  '<path fill="url(#v)" d="M 6 9.125 a 3 3 0 0 1 3 -3 v 3 Z"/>' +
  `<path fill="none" stroke="url(#v)" stroke-linejoin="round" stroke-width="1.0" d="M 4.5 ${size - 3}.5 v 0.875 a 5.125 5.125 0 0 0 5.125 5.125 h 0.875 v -6 Z"/>` +
  `<path fill="url(#v)" d="M 6 ${size - 2}.875 a 3 3 0 0 0 3 3 v -3 Z"/>` +
  `<path fill="none" stroke="url(#v)" stroke-linejoin="round" stroke-width="1.0" d="M ${size + 3}.5 10.5 v -0.875 a 5.125 5.125 0 0 0 -5.125 -5.125 h -0.875 v 6 Z"/>` +
  `<path fill="url(#v)" d="M ${size + 2} 9.125 a 3 3 0 0 0 -3 -3 v 3 Z"/>`
)

const logo = (size) => (
  `<use x="490.177778" y="490.177778" transform="scale(${(0.00083643122676579925 * (size + 8)).toFixed(6)})" xlink:href="#w"/>`
)

module.exports = function swishQRCodeSVG (value, options = {}) {
  const { size, data } = core.create(value, { errorCorrectionLevel: 'h' }).modules

  const margin = options.margin == null ? 4 : options.margin
  const fullSize = (size + (margin * 2))

  const centerSide = Math.round(((0.2 * size) + 3.4) / 2) * 2 - 1
  const center = ((size - centerSide) / 2) | 0
  clearSquare(data, size, 0, 0, 7)
  clearSquare(data, size, size - 7, 0, 7)
  clearSquare(data, size, 0, size - 7, 7)
  clearSquare(data, size, center, center, centerSide)

  return TEMPLATE
    .replace('{VIEWBOX}', `${4 - margin} ${4 - margin} ${fullSize} ${fullSize}`)
    .replace('{DIMENSIONS}', options.size ? ` width="${options.size}" height="${options.size}"` : '')
    .replace('{BACKGROUND}', options.backgroundColor === 'transparent' ? '' : background(options.backgroundColor || '#FFF'))
    .replace('{CIRCLES}', circles(size, data))
    .replace('{CORNERS}', corners(size))
    .replace('{LOGO}', logo(size))
    .replace(/\n/g, ' ')
}
