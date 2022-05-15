<script lang="ts">
  const formatCurrentTime = (): [string, string, string] => {
    const date = new Date();
    return [
      date.toLocaleTimeString([], {
        timeStyle: "short",
        hour12: false,
        // timeZoneName: "short",
      }),
      date.toDateString(),
      date.toLocaleTimeString([], {
        timeStyle: "short",
        hour12: false,
        timeZone: "GMT",
        // timeZoneName: "short",
      }),
    ];
  };

  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let [time, day, gmt] = formatCurrentTime();

  setInterval(() => {
    const td = formatCurrentTime();
    time = td[0];
    day = td[1];
    gmt = td[2];
  }, 10000);
</script>

<div class="clock">
  <h1 class="big swing-in-top-fwd">{time}</h1>
  <h2>{tz}</h2>
  <h2 class="date swing-in-top-fwd-delayed">{day}</h2>
</div>
<div class="gmt">
  <h2 class="swing-in-top-fwd-delayed">{gmt} GMT</h2>
</div>

<style>
  .clock {
    display: grid;
    grid-area: clock;
    gap: 2rem;
    grid-template-columns: auto 1fr;
    grid-template-areas: "big tz" "date date";
    align-items: baseline;
  }
  .date {
    grid-area: date;
  }
  .gmt {
    grid-area: gmt;
  }
</style>
