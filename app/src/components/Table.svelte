<script lang="ts">
</script>

<div>
  <table>
    <slot/>
  </table>
</div>

<style>
  div {
    width: 300px;
    height: 200px;
    overflow-y: scroll;
  }

  table {
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
  }
</style>
