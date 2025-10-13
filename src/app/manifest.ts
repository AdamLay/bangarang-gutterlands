import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "bangarang-in-the-gutterlands",
    name: "Bangarang in the Gutterlands",
    short_name: "Bangarang Gutterlands",
    theme_color: "#ffffff",
    background_color: "#000000",
    display: "fullscreen",
    orientation: "any",
    start_url: "/",
    description: "Quickly and easily build your mech!",
    icons: [
      {
        src: "icons/icon128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "icons/icon192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "icons/icon384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "icons/icon512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "pwa/mech.png",
        sizes: "1082x2402",
        type: "image/png",
        label: "Mech Builder",
      },
      {
        src: "pwa/rules.png",
        sizes: "1082x2402",
        type: "image/png",
        label: "Rules",
      },
      {
        src: "pwa/desktop_mech.png",
        sizes: "3840x2160",
        form_factor: "wide",
        type: "image/png",
        label: "Mech Builder",
      },
      {
        src: "pwa/desktop_rules.png",
        sizes: "3840x2160",
        form_factor: "wide",
        type: "image/png",
        label: "Rules",
      },
    ],
  };
}
