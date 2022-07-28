<script lang="ts">
  import type { BookmarkNode } from "src/types";

  export let item: BookmarkNode;
  // const click = (ev) => {
  //   ev.preventDefault();
  //   document
  //     .querySelectorAll("a, h1, h2, h3")
  //     .forEach((item) =>
  //       item.classList.add(item !== ev.target ? "puff-out" : "vibe")
  //     );
  //   // document.body.classList.add('puff-out');
  //   // document.body.style.color = '#fff0';
  //   setTimeout(() => {
  //     window.location.href = item.url;
  //   }, 300);
  // };
</script>

<div>
  <a class="swing-in-top-fwd" href={item.url}>
    {item.title}
  </a>
</div>

<style>
  a {
    width: auto;
    cursor: pointer;
    display: inline-block;
    padding: 0.75rem;
    box-sizing: border-box;
    text-decoration: none;
    /* background: rgba(0, 0, 0, 0); */
    transition: text-shadow 0.5s; /*background 0.5s, */
    text-align: start;
    text-overflow: ellipsis;
  }
</style>
