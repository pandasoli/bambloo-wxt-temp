import '@/entrypoints/app.css'
import App from '@/entrypoints/App.svelte'

const app = new App({
  target: document.getElementById('app')!,
})

export default app
