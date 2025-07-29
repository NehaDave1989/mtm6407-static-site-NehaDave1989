import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Neha's Cooking Corner",
    description: "A cozy space for food lovers by Neha",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Recipes', link: '/recipes' },
            { text: 'Kitchen Tips', link: '/tips' },
            { text: 'About Me', link: '/about' },
            { text: 'Contact', link: '/contact' },
        ]
    }
})
