import { useAuth } from "../../../hooks/auth";

const Aside = ({ children }) => {
  const { userName } = useAuth();
  return (
    <>
      <aside>{children}</aside>
      <ul>
        <li>Item 1</li>
        <li>Items 2</li>
        <li>
          <a href="">Editar el perfíl de {userName}</a>
        </li>
      </ul>
    </>
  );
};

export { Aside };
