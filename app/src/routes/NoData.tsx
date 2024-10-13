import mb from "../assets/mb.gif";

export default function NoData() {
  return (
    <div>
      <p className="text-lg text-gray-300">No data found.. </p>{" "}
      <img src={mb} alt="" />
    </div>
  );
}
