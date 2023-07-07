<script lang="ts">
  import Table from "./Table.svelte";
  import { month } from "../store";
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
    <th>Days from month: {thisMonth}</th>
    {#each days as { day, number }}
      <tr on:click={() => console.log(day)}>
        {number} - {day}
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
