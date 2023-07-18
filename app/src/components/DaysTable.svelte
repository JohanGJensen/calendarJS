<script lang="ts">
  import TableHeader from "./TableHeader.svelte";
  import Table from "./Table.svelte";
  import { month, updateDay } from "../store";
  import type { IDay } from "@johang/calendarjs";

  let thisMonth: string;
  let days: IDay[];

  month.subscribe((value) => {
    thisMonth = value.month;
    days = value.days;
  });
</script>

<Table>
  {#if days}
    <TableHeader text={`Days from month: ${thisMonth}`} />
    {#each days as { day, number, currentDay: current }, i}
      <tr class:current on:click={() => updateDay(days[i])}>
        {number} - {day}
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
