declare namespace swishQrcodeSvg {
  interface Options {
    backgroundColor?: string
    margin?: number
    size?: number
  }
}

declare function swishQrcodeSvg (input: string, options?: swishQrcodeSvg.Options): string

export = swishQrcodeSvg
