function GetTime() {
  let time = new Date();
  return (
    <div class="TmShow">
      This is the Cutternt Time:
      {time.toDateString()} ---- {time.toLocaleTimeString()}
    </div>
  );
}

export default GetTime;
