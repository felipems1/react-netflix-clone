import Row from "./components/Row";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import categories from "./api";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Banner />
      {categories.map((category) => {
        return (
          <Row
            key={category.name}
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
          />
        );
      })}
      <Row />
    </div>
  );
};

export default App;
