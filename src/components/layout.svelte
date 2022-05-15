<main class="layout bg fill ">
  <slot />
</main>

<style>
  .layout {
    display: grid;
    grid-template-columns: [main] 3fr [side] 2fr;
    grid-template-rows: [clock-row] 3fr [search-row] 1fr [bookmarks-row] 50vh [footer] auto;
    grid-template-areas: "clock gmt" "search ." "bookmarks ." ". footer";
    gap: 1rem;
    align-items: baseline;
  }

  @media (max-width: 1200px) {
    .layout {
      grid-template-columns: [main] 1fr;
      grid-template-rows: [clock-row] 3fr [search-row] 1fr [gmt-row] 1fr [bookmarks-row] 50vh [footer] auto;
      grid-template-areas: "clock" "gmt" "search" "bookmarks" "footer";
    }
  }

  .fill {
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    padding: 2rem;
    box-sizing: border-box;
  }

  @property --x {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 25%;
  }

  @property --y {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 25%;
  }

  .bg {
    background: radial-gradient(
      circle at var(--x) var(--y),
      rgb(35, 12, 103) 0%,
      rgb(0, 0, 0) 130%
    );
    animation: rotateBg 10s linear infinite;
  }
  @keyframes rotateBg {
    0% {
      --x: 20%;
      --y: 20%;
    }
    12.5% {
      --x: 10%;
      --y: 50%;
    }
    25% {
      --x: 20%;
      --y: 80%;
    }
    37.5% {
      --x: 50%;
      --y: 90%;
    }
    50% {
      --x: 80%;
      --y: 80%;
    }
    62.5% {
      --x: 90%;
      --y: 50%;
    }
    75% {
      --x: 80%;
      --y: 20%;
    }
    87.5% {
      --x: 50%;
      --y: 10%;
    }
    100% {
      --x: 20%;
      --y: 20%;
    }
  }
</style>
