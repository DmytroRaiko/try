module.exports = {
  generateKey: async () =>
    window.crypto.subtle.generateKey({
      name: 'AES-GCM',
      length: 256,
    }, true, ['encrypt', 'decrypt']),

  encode: data => {
    const encoder = new TextEncoder()

    return encoder.encode(data)
  },

  generateIv: () =>
    window.crypto.getRandomValues(new Uint8Array(12)),

  encrypt: async (data, key) => {
    const encoded = this.encode(data)
    const iv = this.generateIv()
    const cipher = await window.crypto.subtle.encrypt({
      name: 'AES-GCM',
      iv
    }, key, encoded)

    return {
      cipher,
      iv
    }
  },

  pack: buffer => window.btoa(
    String.fromCharCode.apply(null, new Uint8Array(buffer))
  ),

  unpack: packed => {
    const string = window.atob(packed)
    const buffer = new ArrayBuffer(string.length)
    const bufferView = new Uint8Array(buffer)

    for (let i = 0; i < string.length; i++) {
      bufferView[i] = string.charCodeAt(i)
    }

    return buffer
  },

  decode: byteStream => {
    const decoder = new TextDecoder()

    return decoder.decode(byteStream)
  },

  decrypt: async (cipher, key, iv) => {
    const encoded = await window.crypto.subtle.decrypt({
      name: 'AES-GCM',
      iv
    }, key, cipher)

    return this.decode(encoded)
  },
}
