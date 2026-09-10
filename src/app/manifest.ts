import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Babacan Çiğköfte Küçükpark",
    short_name: "Babacan",
    description: "Babacan Çiğköfte Küçükpark Bornova İzmir",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF8F2",
    theme_color: "#FBF8F2",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
