import { defineConfig } from "unocss";
import { presetWebFonts } from 'unocss'
import transformerDirectives from "@unocss/transformer-directives";
import { presetUno } from "unocss";

export default defineConfig({
  theme: {
    colors: {
      "primary": "#D6E6F2",
      "secondary": "#F7FBFC",
      "tertiary": "#446386",
    },
  },
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: [
          {
            name: 'Inter'
          }
        ]
      }
    })
  ],
  transformers: [
    transformerDirectives(),
  ]
});
