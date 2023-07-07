<script lang="ts">
  import Table from "./Table.svelte";
  import { year, updateMonth } from "../store";
  import type { IMonth } from "@johang/calendarjs";

  let thisYear: string;
  let months: IMonth[];

  year.subscribe((value) => {
    thisYear = value.year;
    months = value.months;
  });
</script>

<Table>
  {#if months}
    <th>Months from year: {thisYear}</th>
    {#each months as { month }, i}
      <tr on:click={() => updateMonth(months[i])}>
        {month}
      </tr>
    {/each}
  {/if}
</Table>

<style>
  th {
    border: 1px solid #ddd;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04aa6d;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }
</style>
