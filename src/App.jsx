import { PrimeReactProvider } from "primereact/api";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeContextProvider } from "./context/theme.context";
import MainContainer from "./containers/MainContainer";
import "primereact/resources/themes/lara-light-cyan/theme.css";

function App() {
    return (
        <>
            <PrimeReactProvider>
                <Provider store={store}>
                    <ThemeContextProvider>
                        <MainContainer />
                    </ThemeContextProvider>
                </Provider>
            </PrimeReactProvider>
        </>
    );
}

export default App;
