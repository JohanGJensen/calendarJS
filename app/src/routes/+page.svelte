<script>
  import Calendar from "@johang/calendarjs";
  const calendar = new Calendar(1980, 2023);
  const years = calendar.getYears();

  console.log(calendar, years);
</script>

<h1>Calendar package</h1>

<div>
  <table>
    <th>year</th>
    {#each years as { year }}
      <tr>
        {year}
      </tr>
    {/each}
  </table>
</div>

<style>
  div {
    width: 500px;
    height: 400px;
    overflow-y: scroll;
  }
  table {
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
  }

  table th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  table tr:hover {
    background-color: #ddd;
  }

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04aa6d;
    color: white;
  }
</style>
