<script lang="ts">
  import { year, month, day, getSelectedDate, type SelectedDate } from "../../store";

  let selectedDate: SelectedDate;

  year.subscribe(() => {
    selectedDate = getSelectedDate();
  });

  month.subscribe(() => {
    selectedDate = getSelectedDate();
  });

  day.subscribe(() => {
    selectedDate = getSelectedDate();
  });
</script>

<div>
  <h2>Selected date</h2>
  {#if selectedDate.day}
    <p>{selectedDate.day.day} {selectedDate.day.number}</p>
  {/if}
  {#if selectedDate.month}
    <p>{selectedDate.month.month}</p>
  {/if}
  {#if selectedDate.year}
    <p>{selectedDate.year.year}</p>
  {/if}
</div>

<style>
  div {
    width: 300px;
    height: 200px;
    border: black 1px solid;
  }

  h2, p {
    padding-left: 0.5em;
  }
</style>