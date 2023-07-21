<script>
  import YearsTable from '../components/YearsTable.svelte';
  import MonthsTable from "../components/MonthsTable.svelte";
  import DaysTable from '../components/DaysTable.svelte';

  import OptionPanel from '../components/OptionPanel/OptionPanel.svelte';
  import SelectedDate from '../components/SelectedDate/SelectedDate.svelte';

</script>

<h1>Calendar package</h1>

<div>
  <YearsTable />
  <MonthsTable />
  <DaysTable />

  <SelectedDate />
</div>

<hr />

<OptionPanel />

<style>
  div {
    display: flex;
    gap: 1rem;
  }
</style>