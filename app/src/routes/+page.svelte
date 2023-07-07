<script>
  import YearsTable from '../components/YearsTable.svelte';
  import MonthsTable from "../components/MonthsTable.svelte";
  import DaysTable from '../components/DaysTable.svelte';

</script>

<h1>Calendar package</h1>

<div>
  <YearsTable />
  <MonthsTable />
  <DaysTable />
</div>

<style>
  div {
    display: flex;
    gap: 1rem;
  }
</style>