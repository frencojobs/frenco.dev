const technologies = ['TypeScript', 'Dart', 'VSCode'] as const

type Tech = typeof technologies[number]

interface Project {
  flex?: number
  name: string
  tagline: string
  cover?: string
  url: string
  stack: Array<Tech>
}
