import Loadable from "react-loadable";

const Loader = (x) =>
  Loadable({
    loading: () => "Cargando...",
    loader: x,
  });

export default Loader;
