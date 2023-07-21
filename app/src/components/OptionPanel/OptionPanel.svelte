<script lang="ts">
  import type { Months } from "../../../../dist";
  import { calendar, updateCalendar } from "../../store";
  
  type LanguageID = "en" | "es" | "dk";

  let selected: LanguageID;

  const getMonths = (value: LanguageID): Months => {
    switch (value) {
      case "en":
        return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      case "es":
        return ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      case "dk":
        return ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"];
      default:
        throw new Error("Invalid language");
    }
  };

  const handleOnChange = () => {
    calendar.setMonths(getMonths(selected));
    updateCalendar();
  };
</script>

<div>
  <select bind:value={selected} on:change={handleOnChange}>
    <option value="en">English</option>
    <option value="es">Spanish</option>
    <option value="dk">Danish</option>
  </select>
</div>

<style>
  div {
    display: flex;
    gap: 1rem;
  }
</style>