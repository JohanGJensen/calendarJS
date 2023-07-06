<script lang="ts">
  import Table from "./Table.svelte";
  import type { IYear } from "@johang/calendarjs";
  import { years, year, updateYear } from "../store";

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
  <th>years {thisYear}</th>
  {#each thisYears as { year }, i}
    <tr on:click={() => updateYear(thisYears[i])}>
      {year}
    </tr>
  {/each}
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
