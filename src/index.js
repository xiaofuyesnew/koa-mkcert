import { homedir, version, platform } from 'node:os'
// import { existsSync, mkdirSync, createWriteStream } from 'node:fs'
// import { resolve } from 'node:path'
// import fetch from 'node-fetch'

// console.log(homedir())
// console.log(existsSync(resolve(homedir(), '.koa-mkcert')))

// if (!existsSync(resolve(homedir(), '.koa-mkcert'))) {
//   mkdirSync(resolve(homedir(), '.koa-mkcert'))
// }

// if (!existsSync(resolve(homedir(), '.koa-mkcert/mkcert.exe'))) {
//   const file = createWriteStream(resolve(homedir(), '.koa-mkcert/mkcert.exe'))
//   // const request = https.get('https://github.com/FiloSottile/mkcert/releases/download/v1.4.4/mkcert-v1.4.4-windows-amd64.exe', (res) => {
//   //   res.pipe(file)
//   //   // file.on('finish', () => {
//   //   //   file.close()
//   //   //   console.log('mkcert.exe downloaded')
//   //   // })
//   // })

//   fetch('https://github.com/FiloSottile/mkcert/releases/download/v1.4.4/mkcert-v1.4.4-windows-amd64.exe', {
//     method: 'GET',
//     headers: {
//       "Content-Type": "application/octet-stream",
//     }
//   }).then(res => {
//     let fileSize = res.headers.get("content-length")
//     let downloaded = 0
//     res.body.on("data", (chunk) => {
//       downloaded += chunk.length
//       console.log("下载进度: " + ((downloaded / fileSize) * 100).toFixed(2) + "%")
//     });
//     res.body.pipe(file)
//   })
// }

import {exec} from 'node:child_process'

exec(`${homedir()}/.koa-mkcert/mkcert --version`, (err, stdout, stderr) => {
  console.log(stdout)
})

console.log(version())
console.log(platform())

const KoaMkcert = async function (ctx, next) {

}

export default KoaMkcert