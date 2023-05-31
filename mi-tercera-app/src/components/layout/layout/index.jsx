import { Aside } from "../aside";
import { Main } from "../main";

const Layout = ({ userName, hideAside, hideMain }) => {
  return (
    <>
      {!hideAside && (
        <Aside userName={userName}>
          <h2>Este es mi aside</h2>
        </Aside>
      )}

      <hr />

      {!hideMain && (
        <Main userName={userName}>
          <h2>Este es el main</h2>
        </Main>
      )}
    </>
  );
};

export { Layout };
