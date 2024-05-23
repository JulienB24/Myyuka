function Allergene({ allergene }) {
  return (
    <div id="allergene" className="fs-4 text-start col-md-11 m-auto p-2  ">
      <i class="fa-solid fa-wheat-awn-circle-exclamation"></i>&nbsp;
      <u>
        <b>Allergènes</b>
      </u>
      : {allergene == "" && "Aucun"}
      {allergene}
    </div>
  );
}

export default Allergene;
