import { FC } from "react";
import styles from "./App.module.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavigationBar from "./components/navigationBar/NavigationBar";
import Purpose from "./components/purpose/Purpose";
import Services from "./components/services/Services";
import Industries from "./components/industries/Industries";

const App: FC = () => {
  return (
    <main className={styles.page}>
      <NavigationBar />
      <Header />
      <Purpose />
      <Services />
      <Industries />
      <Footer />
    </main>
  );
};

export default App;
