import LikeCount from "./components/LikeCount";
import DislikeCount from "./components/DislikeCount";

function App() {
  return (
    <div>
      <LikeCount initialCount={100} />
      <DislikeCount initialCount={10} />
    </div>
  );
}

export default App;

