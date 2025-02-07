import Pc from "./components/pc";
function App() {
  const arr = ["Shadi", "Jubba", "Nikkar", "Calserai"];

  return (
    <section className="grid grid-cols-4 p-6">
      {arr.map((item, index) => (
        <Pc key={index} name={item} price="$27.00" />
      ))}
    </section>
  );
}

export default App;
