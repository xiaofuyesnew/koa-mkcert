import os from 'node:os'
import process from 'node:process'

export const platform = os.platform()

export const downloadURLs = {
  "linux": "https://github.com/FiloSottile/mkcert/releases/download/v1.4.4/mkcert-v1.4.4-linux-amd64",
  "win32": "https://github.com/FiloSottile/mkcert/releases/download/v1.4.4/mkcert-v1.4.4-windows-amd64.exe",
  "darwin": "https://github.com/FiloSottile/mkcert/releases/download/v1.4.4/mkcert-v1.4.4-darwin-arm64"
}

export const downloadURL = downloadURLs[platform]

export const homedir = os.homedir()

export const mkcertdir = `${homedir}/.koa-mkcert`

export const mkcertfile = `${mkcertdir}/mkcert${platform === 'win32' ? '.exe' : ''}`

console.log(process.arch)
console.log()