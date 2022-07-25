<script lang="ts">
  const formatCurrentTime = (): [string, string, string] => {
    const date = new Date();
    return [
      date.toLocaleTimeString([], {
        // timeStyle: "short",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        // timeZoneName: "short",
      }),
      date.toDateString(),
      date.toLocaleTimeString([], {
        // timeStyle: "short",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/London",
        timeZoneName: "short",
      }),
    ];
  };

  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let [time, day, london] = formatCurrentTime();

  setInterval(() => {
    const td = formatCurrentTime();
    time = td[0];
    day = td[1];
    london = td[2];
  }, 1000);
</script>

<div class="clock">
  <h2 class="date swing-in-top-fwd">{day}</h2>
  <div class="time-row">
    <h1 class="time swing-in-top-fwd">{time}</h1>
    <h2 class="bst swing-in-top-fwd">{london}</h2>
  </div>
</div>

<style>
  .clock {
    display: flex;
    grid-area: clock;
    height: 100%;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .time-row {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }
</style>
