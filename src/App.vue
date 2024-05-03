<template>
  <div>
    <el-config-provider>
      <BaseHeader />
      <div class="flex main-container">
        <BaseSide />
        <div w="full" py="4" px="4">
          <div ref="themeContainer" class="theme-container">
            <el-button @click="toggleTheme">Toggle Theme primary color</el-button>
            <p>Current theme color: {{ color }}</p>
          </div>
          <Logos my="4" />
          <h2 color="$el-color-primary">Web Component Wrapper</h2>
          <HelloWorld msg="Element Plus + UnoCSS" />
        </div>
      </div>
    </el-config-provider>
  </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const color = ref('#409eff'); // Local state to track the color
  
      function toggleTheme() {
        // Determine the new color based on the current one
        const newColor = color.value === '#409eff' ? '#f2711c' : '#409eff';
        color.value = newColor;
        
        // Update the global CSS variable
        document.documentElement.style.setProperty('--el-color-primary', newColor);
      }
  
      return { toggleTheme };
    }
  }
  </script>
  
  <style>
  @unocss-placeholder;
  
  #app {
    text-align: center;
    color: var(--el-text-color-primary);
  }
  
  .main-container {
    margin: 10 auto;
    height: calc(100vh - var(--el-menu-item-height) - 3px);
  }
  

  </style>