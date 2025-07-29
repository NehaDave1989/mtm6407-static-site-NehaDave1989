<script setup>
import { useData } from 'vitepress'
import DefaultLayout from 'vitepress/theme'
import CustomHome from './CustomHome.vue'

const { page } = useData()
</script>

<template>
  <component :is="page.relativePath === 'index.md' ? CustomHome : DefaultLayout.Layout" />
</template>
