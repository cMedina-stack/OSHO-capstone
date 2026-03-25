import "./App.css";
import Footer from "./components/Footer";
import HazardAccidentInfoPopup from "./components/HazardAccidentInfoPopup";
import Header from "./components/Header";
import Map from "./components/Map";

function App() {
  return (
    <>
      <div className="w-full rounded-lg h-screen relative bg-slate-50">
        <Header className="">
          <Header />
        </Header>
        <main
          className="h-auto p-6 w-full flex gap-6 place-content-between
        "
        >
          <section className="w-[73%] flex flex-col gap-5 ">
            <div className="w-full h-[54rem]">
              <Map />
            </div>
            <div className="w-full">
              <Footer/>
            </div>
          </section>
          <section className="w-[27%]">
            <HazardAccidentInfoPopup />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
