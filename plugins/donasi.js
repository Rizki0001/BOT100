let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa [0813-1599-5628]
│ • Telkomsel: [0813-1599-5628]
│ • Gopay: [0813-1599-5628]
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/6281315995628
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
