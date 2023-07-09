<script lang="ts">
  import TableHeader from "./TableHeader.svelte";
  import Table from "./Table.svelte";
  import { years, year, updateYear } from "../store";
  import type { IYear } from "@johang/calendarjs";

  let thisYears: IYear[];
  let thisYear: string;

  year.subscribe((value) => {
    thisYear = value.year;
  });

  years.subscribe((value) => {
    thisYears = value;
  });
</script>

<Table>
  <TableHeader text={`years ${thisYear}`} />
  {#each thisYears as { year, currentYear: current }, i}
    <tr class:current on:click={() => updateYear(thisYears[i])}>
      {year}
    </tr>
  {/each}
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
