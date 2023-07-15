<script lang="ts">
  import TableHeader from "./TableHeader.svelte";
  import Table from "./Table.svelte";
  import { year, updateMonth } from "../store";
  import type { IMonth } from "@johang/calendarjs";

  let thisYear: string;
  let months: IMonth[];

  year.subscribe((value) => {
    thisYear = value.year;
    months = value.months;
    console.log(months);
  });
</script>

<Table>
  {#if months}
    <TableHeader text={`Months from year: ${thisYear}`} />
    {#each months as { month, currentMonth: current }, i}
      <tr class:current on:click={() => updateMonth(months[i])}>
        {month}
      </tr>
    {/each}
  {/if}
</Table>

<style>
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  tr.current {
    background-color: #4caf50;
    color: white;
  }
</style>
