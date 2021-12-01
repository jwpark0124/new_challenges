function LeaderboardTable({ leaderboardTable }) {
  const { rank, user_id, score, submit_count, submit_date } = leaderboardTable;

  return (
    <tr className="h-10 border-b border-black border-opacity-10">
      <td className="w-2/10">{rank}</td>
      <td className="w-2/10 overflow-auto">{user_id}</td>
      <td className="w-3/10 overflow-auto	">{score}</td>
      <td className="w-1/10">{submit_count}</td>
      <td className="w-2/10 overflow-hidden	">{submit_date}</td>
    </tr>
  );
}
export default LeaderboardTable;
