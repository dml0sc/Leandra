import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Leandra",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "it-IT",
    baseUrl: "dml0sc.github.io/Leandra",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Literata",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fdfbf7",
          lightgray: "#e8e4dc",
          gray: "#9a948a",
          darkgray: "#4a4540",
          dark: "#2d2926",
          secondary: "#8b4513",
          tertiary: "#6b8e7a",
          highlight: "rgba(139, 69, 19, 0)",
          textHighlight: "#f5e6d3",
        },
        darkMode: {
          light: "#1a1816",
          lightgray: "#2d2926",
          gray: "#6b6560",
          darkgray: "#c4beb5",
          dark: "#f5f1ea",
          secondary: "#d4a574",
          tertiary: "#8fbc8f",
          highlight: "rgba(212, 165, 116, 0)",
          textHighlight: "#3d2914",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
