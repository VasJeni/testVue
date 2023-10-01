/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_SWAP_API: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }