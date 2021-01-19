let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Iqbal Rizki
╠➥ Script: @Iqbal
║
╠➥ Github: https://github.com/Rizki0001/BOTi
╠➥ Instagram: @gwlo46
╠➥ YouTube: Iqbal Gaming
║
╠═〘 Thanks To 〙 ═
╠➥ Iqbal
╠➥ Rizki
╠➥ Maulana
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Pulsa: 0813-1599-5628
╠➥ Tsel: 0813-1599-5628
╠➥ Gopay: 0813-1599-5628
║
║>Request? Wa.me/6281315995628
║
╠═〘 RIZKIBOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

