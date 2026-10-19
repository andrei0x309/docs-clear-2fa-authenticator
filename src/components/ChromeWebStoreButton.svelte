
<script lang="ts">

let theme = $state("light");
let visible = $state(false);

let {
  size = "medium",
  href = "https://chromewebstore.google.com/",
  class: className = "",
} = $props();

$effect(() => {
  theme = document.documentElement.getAttribute('data-theme') || 'light';
  visible = true;
});


</script>

{#if visible}
<a
  href={href}
  class={["webstore-button", `theme-${theme}`, `size-${size}`, className]}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Install from Chrome Web Store"
>
  <svg
    class="chrome-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 152 132"
    fill="none"
    aria-hidden="true"
  >
    <path
      fill="#F1F3F4"
      d="M0 0h152v121.63A10.37 10.37 0 0 1 141.64 132H10.37A10.37 10.37 0 0 1 0 121.63V0Z"
    />
    <path
      fill="#E8EAED"
      d="M0 0h152v66.35H0z"
    />
    <path
      fill="#EA4335"
      d="M76 55.99c-24.29 0-45.49 13.19-56.84 32.81l9.05 27.61L42.18 132h8.89L76 88.81l56.84-.01C121.49 69.18 100.29 55.99 76 55.99Z"
    />
    <path
      fill="#34A853"
      d="M19.16 88.8c-7.47 12.97-10.36 28.25-7.97 43.2h32.9L19.16 88.8Z"
    />
    <path
      fill="#FBBC04"
      d="M76 88.81 100.93 132h39.88c2.39-14.94-.51-30.22-7.97-43.19H76Z"
    />
    <path
      fill="#F1F3F4"
      d="M76 88.81a32.81 32.81 0 0 0-31.13 43.19h62.26A32.81 32.81 0 0 0 76 88.81Z"
    />
    <path
      fill="#1A73E8"
      d="M76 94.96a26.67 26.67 0 0 0-24.51 37.04h49.02A26.67 26.67 0 0 0 76 94.96Z"
    />
    <path
      fill="#fff"
      fill-opacity=".7"
      d="M0 65.48h152v1.73H0z"
    />
  </svg>

  <span class="button-label">Install from Web Store</span>

  <svg
    class="external-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M14 4h6v6m0-6-9 9M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</a>
{/if}

<style>
  .webstore-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 1px solid transparent;
    border-radius: 10px;
    font-family: inherit;
    font-weight: 600;
    line-height: 1.2;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    transition:
      background-color 160ms ease,
      border-color 160ms ease,
      box-shadow 160ms ease,
      transform 160ms ease;
  }

  .webstore-button:hover {
    transform: translateY(-1px);
  }

  .webstore-button:active {
    transform: translateY(0);
  }

  .webstore-button:focus-visible {
    outline: 3px solid #4285f4;
    outline-offset: 3px;
  }

  .theme-light {
    color: #202124;
    background: #fff;
    border-color: #dadce0;
    box-shadow: 0 1px 2px rgb(60 64 67 / 15%);
  }

  .theme-light:hover {
    background: #f8f9fa;
    border-color: #c6c9ce;
    box-shadow: 0 2px 5px rgb(60 64 67 / 20%);
  }

  .theme-dark {
    color: #f8f9fa;
    background: #202124;
    border-color: #5f6368;
  }

  .theme-dark:hover {
    background: #303134;
    border-color: #80868b;
  }

  .chrome-icon {
    display: block;
    flex: 0 0 auto;
    width: 25px;
    height: 22px;
  }

  .external-icon {
    display: block;
    flex: 0 0 auto;
    width: 15px;
    height: 15px;
    opacity: 0.7;
  }

  .size-small {
    gap: 7px;
    padding: 8px 11px;
    font-size: 12px;
    border-radius: 7px;
  }

  .size-small .chrome-icon {
    width: 20px;
    height: 18px;
  }

  .size-small .external-icon {
    width: 12px;
    height: 12px;
  }

  .size-medium {
    gap: 10px;
    padding: 12px 17px;
    font-size: 14px;
  }

  .size-big {
    gap: 12px;
    padding: 16px 22px;
    font-size: 16px;
    border-radius: 12px;
  }

  .size-big .chrome-icon {
    width: 31px;
    height: 27px;
  }

  .size-big .external-icon {
    width: 17px;
    height: 17px;
  }

  @media (prefers-reduced-motion: reduce) {
    .webstore-button {
      transition: none;
    }

    .webstore-button:hover {
      transform: none;
    }
  }
</style>
